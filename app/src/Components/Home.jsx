import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box, CssBaseline, TextField, Link, Paper,
} from '@material-ui/core';
import { Money } from '@material-ui/icons';
import { config } from 'dotenv';
import HomeBG from '../svg/Home.svg';
import { widget, saveToLocalStore } from '../services/Mono';

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
  form: {
    width: '100%',
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
  const history = useHistory();
  const classes = useStyles();
  const env = process.env.REACT_APP_MONO_KEY;
  const [btnState, setBtnState] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    if (!btnState) {
      setBtnState(true);
    }
    saveToLocalStore('mono_app_firstname', firstName);
    saveToLocalStore('mono_app_lastname', lastName);
    saveToLocalStore('mono_app_email', email);
    saveToLocalStore('mono_app_amount', amount);
    widget(env).open();
    history.push('/dashboard');
  };

  const handleInputChange = ({ target: { value } }, setState) => setState(value);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Money className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Cool Fintech App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.backDrop} maxWidth="xl">
        <CssBaseline />
        <Container component="main" maxWidth="xs">
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
                    onChange={(event) => handleInputChange(event, setFirstName)}
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
                    onChange={(event) => handleInputChange(event, setLastName)}
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
                    onChange={(event) => handleInputChange(event, setEmail)}
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
                    onChange={(event) => handleInputChange(event, setAmount)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClick}
                disabled={btnState}
              >
                {btnState ? 'Sending ...' : 'Submit'}
              </Button>
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
