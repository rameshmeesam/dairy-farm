import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CowInfoCard from './CowInfoCard';
import CowInfoTable from './CowInfoTable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          
           <CowInfoCard />
          
        </Grid>
        <Grid item xs={7}>
          
          <CowInfoTable />
        
        </Grid>
      </Grid>
    </div>
  );
}
