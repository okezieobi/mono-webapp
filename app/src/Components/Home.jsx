import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import PaymentIcon from '@material-ui/icons/Payment';
import { config } from 'dotenv';
import HomeBG from '../svg/testBG2.svg';
import widget from '../services/Mono';

config();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Demo Fintech App
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
  const classes = useStyles();
  const [btnState, setBtnState] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    if (!btnState) {
      setBtnState(true);
    }
    localStorage.setItem('mono_app_firstname', firstName);
    localStorage.setItem('mono_app_lastname', lastName);
    localStorage.setItem('mono_app_email', email);
    localStorage.setItem('mono_app_amount', amount);
    widget();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <PaymentIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Demo Fintech App
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
            <form className={classes.form} autoComplete="off">
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
                    onChange={({ target: { value } }) => setFirstName(value)}
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
                    onChange={({ target: { value } }) => setLastName(value)}
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
                    onChange={({ target: { value } }) => setEmail(value)}
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
                    onChange={({ target: { value } }) => setAmount(value)}
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
