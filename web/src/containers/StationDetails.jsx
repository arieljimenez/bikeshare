import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import StationContext from '../contexts/StationsContext';
import { fetchAll } from '../api';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function StationDetail(props) {
  const { state } = useContext(StationContext);
  const classes = useStyles();

  const [isLoading, setIsLoading] = React.useState(true)
  const [station, setStation] = React.useState(state.selectedStation);

  const { params } = props.match;

  React.useEffect(() => {
      async function fetchStations() {
        const { success, results } = await fetchAll('citibikenyc');

        if (success) {
          // search the desired station trough the array
          for (let index = 0; index < results.length; index++) {
            if (results[index].id == params.stationID) {
              setStation(results[index]);
              break;
            }
          }
        }
        setIsLoading(false);
      };

      setIsLoading(true);

      if (state.selectedStation) {
        setStation(state.selectedStation);
        setIsLoading(false);
      } else {
        fetchStations();
      }
  }, []);

  return ( isLoading
      ? <div>
          <Skeleton variant="text" height={50} />
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={100} />
        </div>
      : <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>{station.stationName} <span style={{color: 'gray'}}>ID#{station.id}</span></h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              defaultValue={station.stAddress1}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Available Docks"
              variant="outlined"
              defaultValue={station.availableDocks}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Available Bikes"
              variant="outlined"
              defaultValue={station.availableBikes}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Total Docks"
              variant="outlined"
              defaultValue={station.totalDocks}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </div>
  )
};

export default StationDetail;
