import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Pets from '@material-ui/icons/Pets';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import HealthIcon from '@material-ui/icons/LocalHospital';
import HelpIcon from '@material-ui/icons/Help';
import SuggetionIcon from '@material-ui/icons/NoteOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CowInfo from './CowInfo';
//import ExampleData from './ExampleData';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab icon={<Pets />} aria-label="pets" {...a11yProps(0)} />
            <Tab icon={<LocationSearchingIcon />} aria-label="location" {...a11yProps(1)} />
            <Tab icon={<HealthIcon />} aria-label="health" {...a11yProps(2)} />            
            <Tab icon={<SuggetionIcon />} aria-label="shopping" {...a11yProps(3)} />
            <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CowInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
         Cow Location come here
        </TabPanel>
        <TabPanel value={value} index={2}>
        Cow Health Info
        </TabPanel>
        <TabPanel value={value} index={3}>
        Suggetions
        </TabPanel>
        <TabPanel value={value} index={4}>
        Help
        </TabPanel>


      </div>
    );
  }
  