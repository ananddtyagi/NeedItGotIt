import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import MainContent from './components/maincontent';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  divider: {
    margin:'100vh',
  },
  headbar: {
    backgroundColor: '#6a0dad',
    position: 'static',
  },
  header: {
  },
  content: {
    overflow: 'hidden',
  }
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
      <div className={classes.root}>
        <Grid constainer spacing={3}>
          <Grid item>
            <div className={classes.header}>
              <Box component="span">
                <AppBar className={classes.headbar}>
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      Need It / Got It
                    </Typography>
                    <AccountCircle />
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.content}>
              <MainContent></MainContent>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
