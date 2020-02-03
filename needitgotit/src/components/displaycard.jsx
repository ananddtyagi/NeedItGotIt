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
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
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
  title:{
    fontSize: 14,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  description_1: {
    backgroundColor: '#3a3d3b',
    color: '#fff',
    marginTop: 5,
    marginBottom: -10,
    height: 80,
    width: 300
  },
  description_2: {
    backgroundColor: '#3a3d3b',
    color: '#fff',
    marginTop: -5,
    width: 300,
    marginLeft: -16
  },
  card: {
    backgroundColor: '#fff',
    color: '#000000'
  },
  button: {
    marginTop: 5
  }
}));



  export default function DisplayCard({cardName, cardEmail, cardDescription}) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <div>
        <Card className={classes.card} variant="outlined">
          <img 
          alt="monster" src={`https://robohash.org/20?set=set1&size=80x100`} 
          />
          <CardContent>
            <Typography className={classes.title} gutterbottom>
              Student Name: {cardName}
            </Typography>
            <Typography className={classes.title}>
              Contact: {cardEmail}
            </Typography>
            <Typography className={classes.description_1} paragraph>
              Project Description: {cardDescription}
            </Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.description_2} paragraph>
                  Detail...
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing>
              <IconButton className={classes.button} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton className={classes.button} aria-label="person add">
                <PersonAddIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
}
