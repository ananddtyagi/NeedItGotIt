import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

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



  export default function InputCard({onCancel, onSubmit}) {

    const classes = useStyles();

    const [state, setState] = useState({
      name: "",
      email: "",
      description: "",
    });

    const submitForm = () => {
      onSubmit(name, email, description);

    }

    const handleChange = event => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

    const { name, email, description } = state;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <form>
              <Input name="name" label="name" onChange={handleChange}/>
              <Input name="email" label="email" onChange={handleChange}/>
              <Input name="description" label="skills" onChange={handleChange}/>
            </form>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={onCancel} color="secondary">Cancel</Button>
            <Button type = "submit" className={classes.done} color="primary" onClick={submitForm}> Done</Button>
          </CardActions>
        </Card>
      </div>
    );
}
