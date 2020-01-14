import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';



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
    minWidth: 275,
  },
  done: {
    align: 'right',
  }
}));



  export default function InputCard({onCancel, onSubmit}) {

    const classes = useStyles();

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <FormControl>
              <TextField id="name" label="name"/>
              <TextField id="email" label="email"/>
              <TextField id="description" label="skills"/>
            </FormControl>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={onCancel} color="secondary">Cancel</Button>
            <Button type = "submit" className={classes.done} color="primary" onClick={onSubmit}> Done</Button>
          </CardActions>
        </Card>
      </div>
    );
}
