import React, {useState, setState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

import InputCard from './inputcard';
import DisplayCard from './displaycard';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  headbar: {
    backgroundColor: '#6a0dad',
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    padding: 0,
  },
  column: {
    flexGrow: 1,
    align: 'center',
    padding: 'auto',
    alignItems:"center"
  }
}));


export default function MainContent() {
  const classes = useStyles();
  const [needItList, setNeedItList] = useState([]);
  const [gotItList, setGotItList] = useState([]);

  const [open, setOpen] = useState(false);

  const [name, email, skills] = useState([]);
  const [side, setSide] = useState("");

  const onAddNeedIt = () => {
    setSide("NeedIt");
    setOpen(true);
  }

  const onAddGotIt = () => {
    setSide("GotIt");
    setOpen(true);
  }

  const formdata = (data) => {
    setOpen(data)
  }

  const handleCancel = () => {
    setOpen(false);
  }

  const handleSubmit = (inputName, inputEmail, inputDescription) => {
    if(side === "NeedIt"){
      setNeedItList(needItList.concat(<DisplayCard cardName={inputName} cardEmail={inputEmail} cardDescription={inputDescription}></DisplayCard>))
    }
    else if(side === "GotIt"){
      setGotItList(gotItList.concat(<DisplayCard cardName={inputName} cardEmail={inputEmail} cardDescription={inputDescription}></DisplayCard>))
    }
    setOpen(false);
  }



  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={3}>
          <div className={classes.column}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography>Need It</Typography>
              </Paper>
              <Button onClick={onAddNeedIt}>
                <Paper className={classes.paper}>
                  <AddIcon/>
                </Paper>
              </Button>
              {needItList}
            </Grid>
          </div>
          <div className={classes.column}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography>Got It</Typography>
              </Paper>
              <Button onClick={onAddGotIt}>
                <Paper className={classes.paper}>
                  <AddIcon/>
                </Paper>
              </Button>
              {gotItList}
            </Grid>
          </div>
        </Grid>
      </div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <InputCard onCancel={handleCancel} onSubmit={handleSubmit} />
        </Dialog>


    </div>
  );
}
