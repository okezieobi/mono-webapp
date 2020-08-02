import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { Money } from '@material-ui/icons';
import { config } from 'dotenv';
import Mono from '../Mono';

config();

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
  const env = process.env.REACT_APP_MONO_KEY;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Money className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Cool Fintech App
          </Typography>
          <Button color="inherit" onClick={() => { Mono(env).open(); }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
