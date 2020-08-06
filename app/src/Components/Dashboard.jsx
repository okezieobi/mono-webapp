/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, Container,
  List, ListItem, ListItemText, Toolbar, Typography, ListItemIcon,
} from '@material-ui/core';
import { Dashboard, Menu } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getTransactions } from '../services/Mono';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'whitesmoke',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    padding: theme.spacing(2),
  },
}));

function Dash(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transactions, setTransactions] = useState({});
  // const [debits, setDebits] = useState([]);
  // const [credits, setCredits] = useState([]);
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    setTransactions(getTransactions());
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Container className={classes.toolbar}>
        <Typography className={classes.title} variant="h6" noWrap>
          Cool Fintech App
        </Typography>
      </Container>
      <Divider />
      <List>
        {[{ text: 'Dashboard', icon: <Dashboard /> }].map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <Typography>{`Account Number: ${transactions.accountnumber}`}</Typography>
          <Typography>{`Balance: ${transactions.balance}`}</Typography>
          <Typography>{`BVN: ${transactions.bvn}`}</Typography>
          <Typography>{`Currency: ${transactions.currency}`}</Typography>
          <Typography>{`Name: ${transactions.name}`}</Typography>
          <Typography>{`Type: ${transactions.type}`}</Typography>
          <Typography>{`ID: ${transactions._id}`}</Typography>
        </Container>
      </main>
    </div>
  );
}

Dash.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

Dash.defaultProps = {
  window: undefined,
};

export default Dash;
