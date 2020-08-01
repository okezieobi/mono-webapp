import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { Money } from '@material-ui/icons';
import Mono from '../Mono';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Money className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Cool Fintech App
          </Typography>
          <Button color="inherit" onClick={() => { Mono().open(); }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
