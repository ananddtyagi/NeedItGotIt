import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function NeedIt() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper className={classes.paper}>Card1</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
