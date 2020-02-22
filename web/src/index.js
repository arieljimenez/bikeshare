import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import StationList from './containers/StationList';
import StationDetails from './containers/StationDetails';
import TopBar from './components/TopBar';

import { StationsContextProvider } from './contexts/StationsContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  links: {
    textDecoration: "none",
    color: "white"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <StationsContextProvider>
      <HashRouter>
        <div className={classes.root}>
          <TopBar styles={classes} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={StationList} />
              <Route exact path="/station/:stationID" component={StationDetails} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    </StationsContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
