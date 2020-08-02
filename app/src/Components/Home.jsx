import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box, CssBaseline, TextField, Link, Paper,
} from '@material-ui/core';
import { Money } from '@material-ui/icons';
import { config } from 'dotenv';
import HomeBG from '../svg/Home.svg';
import Mono from '../Mono';

config();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Cool Fintech App
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backDrop: {
    backgroundImage: `url(${HomeBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

export default function Home() {
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.backDrop} maxWidth="xl">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={18} className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="amount"
                    label="Amount"
                    type="number"
                    id="amount"
                    autoComplete="current-amount"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => { Mono(env).open(); }}
              >
                Submit
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Container>
    </div>
  );
}
