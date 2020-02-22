import React, { useContext , useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import { title as appName } from '../../package.json';

import StationsContext from '../contexts/StationsContext';
import { searchStationsByName } from '../helpers';
import { ACTIONS } from '../contexts/StationsContext';

const useStyles = makeStyles(theme => ({
  links: {
    textDecoration: "none",
    color: "white"
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));

export default function TopBar () {
  const classes = useStyles();
  let { state, dispatch } = useContext(StationsContext);

  const handleSearch = (event) => {
    const filteredStations = searchStationsByName({
      query: event.target.value,
      stations: state.stations,
    });

     dispatch({type: ACTIONS.SET_FILTERED_STATIONS, payload: filteredStations});
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/" className={classes.links}>
            {appName}
          </Link>
        </Typography>
        { state.currentPage === 'homepage' && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
};
