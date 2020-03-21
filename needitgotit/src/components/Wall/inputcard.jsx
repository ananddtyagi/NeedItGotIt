import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    flexGrow: 1,
    paddingTop: 10,
  },
  card: {
    maxWidth: '350px',
    minHeight: '300px',
    paddingTop: '20px',
  },
  cardActions: {
    display: 'block',
  },
  cardContent: {
    textAlign: 'center',
  },
  done: {
    display: 'inline-block',
    float: 'right',
  },
  desc: {

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
          <CardContent className={classes.cardContent}>
            <form>
              <Grid container className={classes.form} spacing={2}>
                <Grid item xs={12}>
                  <Input fullWidth="true" name="name" label="name" variant="outlined" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                  <Input fullWidth="true"name="email" label="email" variant="outlined" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                  <Input fullWidth="true" className={classes.desc} size="medium" name="description" label="skills" variant="outlined" onChange={handleChange} multiline="true" rows="5"/>
                </Grid>
              </Grid>
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
