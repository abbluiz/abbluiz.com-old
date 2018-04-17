import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Toolbar from 'material-ui/Toolbar';
import Snackbar from 'material-ui/Snackbar';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import MenuList from 'material-ui/Menu/MenuList';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import CommentIcon from 'material-ui-icons/Comment';
import CollectionsBookmarkIcon from 'material-ui-icons/CollectionsBookmark';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import SettingsIcon from 'material-ui-icons/Settings';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import withStyles from 'material-ui/styles/withStyles';
import withTheme from 'material-ui/styles/withTheme';

import Home from "./Home/Home";
import LastActivity from "./Activity/LastActivity";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Admin from "./Admin/Admin";
import Whoops404 from "./Whoops404";
import SocialMedia from "./Home/SocialMedia";

const drawerWidth = 240;

const styles = theme => ({

  root: {

    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',

  },

  appBar: {

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },

  appBarMobile: {

    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

  },

  appBarShift: {

    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },

  menuButton: {

    marginLeft: 12,
    marginRight: 36,

  },

  menuButtonMobile: {

    marginLeft: -12,
    marginRight: 20,

  },

  hide: {

    display: 'none',

  },

  drawerPaper: {

    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },

  drawerMobilePaper: {

    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },

  },

  drawerPaperClose: {

    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },

  },

  toolbar: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,

  },

  toolbarMobile: theme.mixins.toolbar,

  content: {

    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,

  },

  button: {

    margin: 0,

  },

  selected: {

    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },

  },

  languageOptions: {

    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  },


});

const languageOptions = [
  'Português (Brasil)',
  'English (Canada)',
  'English (United States)',
  'Auto',
];

function appBarTitle(props) {

  let string = props.location.pathname;

  return <Typography variant="title" color="inherit" noWrap>{
    (string.substring(1)).charAt(0).toUpperCase() + string.slice(2)
  }</Typography>

}

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      mobileOpen: false,
      desktopOpen: false,

      settingsOpen: false,

      openLuiz: false,
      openAntonio: false,
      openBueno: false,
      openBarbosa: false,
      vertical: null,
      horizontal: null,

      anchorEl: null,
      selectedIndex: 3,

    };

    this.handleDesktopDrawerOpen = this.handleDesktopDrawerOpen.bind(this);
    this.handleDesktopDrawerClose = this.handleDesktopDrawerClose.bind(this);
    this.handleMobileDrawerOpen = this.handleMobileDrawerOpen.bind(this);
    this.handleMobileDrawerClose = this.handleMobileDrawerClose.bind(this);
    this.handleMobileDrawerToggle = this.handleMobileDrawerToggle.bind(this);
    this.handleClickLuiz = this.handleClickLuiz.bind(this);
    this.handleCloseLuiz = this.handleCloseLuiz.bind(this);
    this.handleClickAntonio = this.handleClickAntonio.bind(this);
    this.handleCloseAntonio = this.handleCloseAntonio.bind(this);
    this.handleClickBueno = this.handleClickBueno.bind(this);
    this.handleCloseBueno = this.handleCloseBueno.bind(this);
    this.handleClickBarbosa = this.handleClickBarbosa.bind(this);
    this.handleCloseBarbosa = this.handleCloseBarbosa.bind(this);
    this.handleSettingsOpen = this.handleSettingsOpen.bind(this);
    this.handleSettingsClose = this.handleSettingsClose.bind(this);
    this.handleClickLangListItem = this.handleClickLangListItem.bind(this);
    this.handleClickLangMenuItem = this.handleClickLangMenuItem.bind(this);
    this.handleLangClose = this.handleLangClose.bind(this);

  }

  componentDidMount() {

    if(this.props.location.pathname !== '/') {

      this.setState({ desktopOpen: true });

    }

  }

  handleDesktopDrawerOpen = () => {
    this.setState({ desktopOpen: true });
  };

  handleDesktopDrawerClose = () => {
    this.setState({ desktopOpen: false });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleMobileDrawerToggle = () => {
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

  handleSettingsOpen = () => {
    this.handleMobileDrawerClose();
    this.setState({ settingsOpen: true });
  };

  handleSettingsClose = () => {
    this.setState({ settingsOpen: false });
  };

  handleClickLangListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickLangMenuItem = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleLangClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes, theme } = this.props;

    const {
      vertical,
      horizontal,
      openLuiz,
      openAntonio,
      openBueno,
      openBarbosa,
      anchorEl,
    } = this.state;

    const pathname = this.props.location.pathname;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const drawer = (

      <div>

        <Divider />

        <MenuList>

          <ListItem
            button
            component={NavLink}
            exact to="/"
            activeClassName={classes.selected}
            onClick={() => { this.handleMobileDrawerClose(); this.handleDesktopDrawerClose() }}>

            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText primary="Home" />

          </ListItem>

          <ListItem
            button
            component={NavLink}
            to="/activity"
            activeClassName={classes.selected}
            onClick={() => { this.handleMobileDrawerClose(); this.handleDesktopDrawerOpen() }}>

            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>

            <ListItemText primary="Activity" />

          </ListItem>


          <ListItem
            button
            component={NavLink}
            to="/portfolio"
            activeClassName={classes.selected}
            onClick={() => { this.handleMobileDrawerClose(); this.handleDesktopDrawerOpen() }}>

            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>

            <ListItemText primary="Portfolio" />

          </ListItem>

          <ListItem
            button
            component={NavLink}
            to="/about"
            activeClassName={classes.selected}
            onClick={() => { this.handleMobileDrawerClose(); this.handleDesktopDrawerOpen() }}>

            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>

            <ListItemText primary="About Me" />

          </ListItem>


          <ListItem
            button
            onClick={this.handleSettingsOpen}>

            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>

            <ListItemText primary="Settings" />

          </ListItem>

        </MenuList>

        <Divider />

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

    const appTitle = (pathname === '/') ? (

      labbButtons

    ) : (

      appBarTitle(this.props)

    );

    return (

      <div className={classes.root}>

        <Hidden mdUp>

          <AppBar className={classes.appBarMobile}>

            <Toolbar>

              <IconButton
                color="inherit"
                aria-label="open mobile drawer"
                onClick={this.handleMobileDrawerToggle}
                className={classes.menuButtonMobile}
              >

                <MenuIcon />

              </IconButton>

              {appTitle}

            </Toolbar>

          </AppBar>

          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleMobileDrawerClose}
            onOpen={this.handleMobileDrawerOpen}
            classes={{
              paper: classes.drawerMobilePaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >

            <div
              tabIndex={0}
              role="button"
              onClick={this.handleMobileDrawerClose}
              onKeyDown={this.handleMobileDrawerClose}
            >

              <div className={classes.toolbarMobile} />

              {drawer}

            </div>

          </SwipeableDrawer>

        </Hidden>

        <Hidden smDown implementation="css">

          <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.desktopOpen && classes.appBarShift)}
        >

          <Toolbar disableGutters={!this.state.desktopOpen}>

            <IconButton
              color="inherit"
              aria-label="open desktop drawer"
              onClick={this.handleDesktopDrawerOpen}
              className={classNames(classes.menuButton, this.state.desktopOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            {appTitle}

          </Toolbar>

        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.desktopOpen && classes.drawerPaperClose),
          }}
          open={this.state.desktopOpen}
        >

          <div className={classes.toolbar}>

            <IconButton onClick={this.handleDesktopDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>

          </div>

          {drawer}

        </Drawer>

        </Hidden>

        <Dialog
          fullScreen={false}
          open={this.state.settingsOpen}
          onClose={this.handleSettingsClose}
          aria-labelledby="responsive-dialog-settings-title"
        >

          <DialogTitle id="responsive-dialog-settings-title">{"Settings"}</DialogTitle>

          <DialogContent>

            <div className={classes.languageOptions}>

              <List component="nav">

                <ListItem
                  button
                  aria-haspopup="true"
                  aria-controls="lock-menu"
                  aria-label="Language"
                  onClick={this.handleClickLangListItem}
                >

                  <ListItemText
                    primary="Language"
                    secondary={languageOptions[this.state.selectedIndex]}
                  />

                </ListItem>

              </List>

              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleLangClose}
              >

                {languageOptions.map((langOption, index) => (

                  <MenuItem
                    key={langOption}
                    selected={index === this.state.selectedIndex}
                    onClick={event => this.handleClickLangMenuItem(event, index)}
                  >

                    {langOption}

                  </MenuItem>

                ))}

              </Menu>

            </div>

          </DialogContent>

          <DialogActions>

            <Button onClick={this.handleSettingsClose} color="secondary" autoFocus>
              Save
            </Button>

          </DialogActions>

        </Dialog>

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

          <SocialMedia />

        </main>

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

      </div>

    );

  }

}

App.propTypes = {

  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

};

export default compose(

  withStyles(styles),

  withTheme(),

)(App);