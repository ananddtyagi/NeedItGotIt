import React, {useState, setState} from 'react';
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
  card: {
    position: 'relative',
  },
  done: {
    float: 'right', 
  }
}));


export default function NeedIt() {
  const classes = useStyles();
  const [inputList, setInputList] = useState([]);
  const [open, setOpen] = useState(true);

  const onAddBtnClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Card className={classes.card}>
          <CardContent>
            <FormControl>
              <TextField id="name" label="name"/>
              <TextField id="email" label="email"/>
              <TextField id="description" label="skills"/>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button className={classes.done} color="primary" onClick={handleClose}>Done</Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
}
