import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import NeedIt from './components/needit';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  divider: {
    margin:'100vh',
  },

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </head>
      <Grid container spacing={3} justify="center">
        <NeedIt></NeedIt>
      </Grid>
    </div>
  );
}

export default App;
