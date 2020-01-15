import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "10%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardActions: {
    display: 'block',
  },
  done: {
    display: 'inline-block',
    float: 'right',
  }
}));



  export default function NeedItCard({cardName, cardEmail, cardDescription}) {

    const classes = useStyles();

    useEffect(() => {
      console.log({cardName})
    })
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography>{cardName}</Typography>
            <Typography>{cardEmail}</Typography>
            <Typography>{cardDescription}</Typography>

          </CardContent>
        </Card>
      </div>
    );
}
