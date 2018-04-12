import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Snackbar from 'material-ui/Snackbar';
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import { withStyles } from 'material-ui/styles';

import Home from "./Home";
import LastActivity from "./Activity/LastActivity";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Admin from "./Admin/Admin";
import Whoops404 from "./Whoops404";

const drawerWidth = 240;

const styles = theme => ({

  root: {

    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',

  },

  appBar: {

    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

  },

  navIconHide: {

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {

    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },

  },

  content: {

    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,

  },

  button: {

    margin: 0,

  },

});

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      mobileOpen: false,

      openLuiz: false,
      openAntonio: false,
      openBueno: false,
      openBarbosa: false,
      vertical: null,
      horizontal: null,

    };

    this.handleClickLuiz = this.handleClickLuiz.bind(this);
    this.handleCloseLuiz = this.handleCloseLuiz.bind(this);
    this.handleClickAntonio = this.handleClickAntonio.bind(this);
    this.handleCloseAntonio = this.handleCloseAntonio.bind(this);
    this.handleClickBueno = this.handleClickBueno.bind(this);
    this.handleCloseBueno = this.handleCloseBueno.bind(this);
    this.handleClickBarbosa = this.handleClickBarbosa.bind(this);
    this.handleCloseBarbosa = this.handleCloseBarbosa.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);

  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleClickLuiz = state => () => {
    this.setState({ openLuiz: true, ...state});
  };

  handleCloseLuiz = () => {
    this.setState({ openLuiz: false });
  };

  handleClickAntonio = state => () => {
    this.setState({ openAntonio: true, ...state });
  };

  handleCloseAntonio = () => {
    this.setState({ openAntonio: false });
  };

  handleClickBueno = state => () => {
    this.setState({ openBueno: true, ...state });
  };

  handleCloseBueno = () => {
    this.setState({ openBueno: false });
  };

  handleClickBarbosa = state => () => {
    this.setState({ openBarbosa: true, ...state });
  };

  handleCloseBarbosa = () => {
    this.setState({ openBarbosa: false });
  };

  render() {

    const { classes, theme } = this.props;
    const { vertical, horizontal, openLuiz, openAntonio, openBueno, openBarbosa } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>Asd</List>
        <Divider />
        <List>Asd</List>
      </div>
    );

    const labbButtons = (

      <div>
        <Button
          size="small"
          color="secondary"
          className={classes.button}
          onClick={this.handleClickLuiz({ vertical: 'bottom', horizontal: 'left' })}>

          L
        </Button>

        <Button
          size="small"
          color="secondary"
          className={classes.button}
          onClick={this.handleClickAntonio({ vertical: 'bottom', horizontal: 'left' })}>

          A
        </Button>

        <Button
          size="small"
          color="secondary"
          className={classes.button}
          onClick={this.handleClickBueno({ vertical: 'bottom', horizontal: 'left' })}>

          B
        </Button>

        <Button
          size="small"
          color="secondary"
          className={classes.button}
          onClick={this.handleClickBarbosa({ vertical: 'bottom', horizontal: 'left' })}>

          B
        </Button>
      </div>

    );

    return (

      <div className={classes.root}>

        <AppBar className={classes.appBar}>

          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >

              <MenuIcon />

            </IconButton>

            {labbButtons}

          </Toolbar>

        </AppBar>

        <Hidden mdUp>

          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
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

        <Hidden smDown implementation="css">

          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >

            {drawer}

          </Drawer>

        </Hidden>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openLuiz}
          autoHideDuration={2500}
          onClose={this.handleCloseLuiz}
          SnackbarContentProps={{
            'aria-describedby': 'luiz-message',
          }}
          message={<span id="luiz-message">Luiz</span>}
          className={classes.snackbar}
        />

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openAntonio}
          autoHideDuration={2500}
          onClose={this.handleCloseAntonio}
          SnackbarContentProps={{
            'aria-describedby': 'antonio-message',
          }}
          message={<span id="antonio-message">Antonio</span>}
          className={classes.snackbar}
        />

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openBueno}
          autoHideDuration={2500}
          onClose={this.handleCloseBueno}
          SnackbarContentProps={{
            'aria-describedby': 'bueno-message',
          }}
          message={<span id="bueno-message">Bueno</span>}
          className={classes.snackbar}
        />

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openBarbosa}
          autoHideDuration={2500}
          onClose={this.handleCloseBarbosa}
          SnackbarContentProps={{
            'aria-describedby': 'barbosa-message',
          }}
          message={<span id="barbosa-message">Barbosa</span>}
          className={classes.snackbar}
        />


        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/activity" component={LastActivity} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route component={Whoops404} />
          </Switch>
        </main>

      </div>

    );

  }

}

App.propTypes = {

  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

};

export default withStyles(styles, { withTheme: true })(App);
