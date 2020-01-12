import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';


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


export default function InputCard() {
  const classes = useStyles();

  return (
    <div>
      <Button>SDFSDFM</Button>
    </div>
  );
}
