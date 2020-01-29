import React, {useState, setState, useEffect } from 'react';
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
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';


import AddIcon from '@material-ui/icons/Add';

import InputCard from './inputcard';
import DisplayCard from './displaycard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


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
    padding: '10px',
  },
  column: {
    flexGrow: 1,
    align: 'center',
    alignItems:"center"
  },
  tab: {
    width: '100px'
  },
  collectionsoverview: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '10px',
    height: '50px',
  },

}));


export default function MainContent() {
  const classes = useStyles();

  const [needItList, setNeedItList] = useState([]);
  const [gotItList, setGotItList] = useState([]);

  const [open, setOpen] = useState(false);
  const [name, email, skills] = useState([]);
  const [side, setSide] = useState("NeedIt");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const onAddNeedIt = () => {
  //   setSide("NeedIt");
  //   setOpen(true);
  // }
  //
  // const onAddGotIt = () => {
  //   setSide("GotIt");
  //   setOpen(true);
  // }

  const addCard = () => {
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
      setNeedItList([

        {
          name: inputName,
          email: inputEmail,
          description: inputDescription,
          index: needItList.length,

        },
        ...needItList,
      ])
      //setNeedItList(needItList.concat([{inputName}, {inputEmail}, {inputDescription}, ])
    }
    else if(side === "GotIt"){
      setGotItList([

        {
          name: inputName,
          email: inputEmail,
          description: inputDescription,
          index: gotItList.length,
        },
        ...gotItList,
      ])
      //setGotItList(gotItList.concat(<DisplayCard cardName={inputName} cardEmail={inputEmail} cardDescription={inputDescription}></DisplayCard>))
    }
    console.log(side)
    setOpen(false);
  }


  useEffect(() => {

  })

  return (
    <div className={classes.root}>
      <div>

        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="tabs"
            centered
          >
            <Tab fullWidth label="Need It" onClick={() => setSide("NeedIt")}/>
            <Tab fullWidth label="Got It" onClick={() => setSide("GotIt")}/>
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0} >
          <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
          <Grid item xs={12} sm={6} md={3}>
            <Button onClick={addCard} >add</Button>
          </Grid>
          {needItList.map(card => (
              <Grid item xs={12} sm={6} md={3} key = {card.index}>
                <DisplayCard key={card.index} cardName = {card.name} cardEmail = {card.email} cardDescription = {card.description}/>
              </Grid>
          ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>

          <Grid item xs={12} sm={6} md={3}>
            <Button onClick={addCard} >add</Button>
          </Grid>
          {gotItList.map(card => (
            <Grid item xs={12} sm={6} md={3} key = {card.index}>
              <DisplayCard key={card.index} cardName = {card.name} cardEmail = {card.email} cardDescription = {card.description}/>
            </Grid>

          ))}
        </TabPanel>
      </div>

        <Dialog open={open} aria-labelledby="form-dialog-title">
          <InputCard onCancel={handleCancel} onSubmit={handleSubmit} />
        </Dialog>


    </div>
  );
}
