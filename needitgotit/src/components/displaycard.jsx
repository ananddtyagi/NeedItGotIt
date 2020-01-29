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
  
}));



  export default function DisplayCard({cardName, cardEmail, cardDescription}) {

    const classes = useStyles();

    return (
      <div className={classes.collectionpreview}>
        <Card className={classes.preview}>
          <CardContent>
            <Typography>{cardName}</Typography>
            <Typography>{cardEmail}</Typography>
            <Typography>{cardDescription}</Typography>

          </CardContent>
        </Card>
      </div>
    );
}
