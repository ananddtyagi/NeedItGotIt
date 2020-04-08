import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



import PersonAddIcon from '@material-ui/icons/PersonAdd';




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
  label: {
    float: 'left',
  },
  response: {
    float: 'left'
  }
}));



  export default function DisplayCard({cardName, cardEmail, cardDescription}) {

    const classes = useStyles();

    return (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <form>
              <Grid container className={classes.form} spacing={2}>
                <Grid item container>
                  <Grid item xs={12} >
                    <Typography className={classes.label}>Name</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth="true"
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue = {cardName}
                      variant="filled"
                      className={classes.response}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={12} >
                    <Typography className={classes.label}>Email</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth="true"
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue = {cardEmail}
                      variant="filled"
                      className={classes.response}
                    />
                  </Grid>

                </Grid>
                <Grid item container>
                  <Grid item xs={12} >
                    <Typography className={classes.label}>Description</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth="true"
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue = {cardDescription}
                      variant="filled"
                      className={classes.response}
                      multiline
                    />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}
