import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import AddIcon from '@material-ui/icons/Add';

import InputCard from './inputcard';


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





export default function NeedIt() {
  const classes = useStyles();
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    setInputList(inputList.concat(<InputCard></InputCard>))
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <Button onClick={onAddBtnClick}>
            <Paper className={classes.paper}>
              <AddIcon/>
            </Paper>
          </Button>
          {inputList}
        </Grid>
      </Grid>
    </div>
  );
}
