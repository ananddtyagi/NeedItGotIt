import React, {useState, setState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


import AddIcon from '@material-ui/icons/Add';

import InputCard from './inputcard';
import DisplayCard from './displaycard';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "10%",
    display: 'inline-block'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

const NeedItDispatch = React.createContext(null);

export default function NeedIt() {
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
          <Grid item xs={6}>
            <Button onClick={onAddNeedIt}>
              <Paper className={classes.paper}>
                <AddIcon/>
              </Paper>
            </Button>
            {needItList}
          </Grid>
          <Grid item xs={6}>
            <Button onClick={onAddGotIt}>
              <Paper className={classes.paper}>
                <AddIcon/>
              </Paper>
            </Button>
            {gotItList}
          </Grid>
        </Grid>
      </div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <InputCard onCancel={handleCancel} onSubmit={handleSubmit} />
        </Dialog>


    </div>
  );
}
