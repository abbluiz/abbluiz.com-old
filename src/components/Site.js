import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {AppBar, Button, Snackbar, Toolbar} from "material-ui";
import { withStyles } from 'material-ui/styles';

import Home from "./Home";
import LastActivity from "./Activity/LastActivity";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Admin from "./Admin/Admin";
import Whoops404 from "./Whoops404";

const styles = theme => ({

  root: {

    flexGrow: 1,

  },

  button: {

    margin: 0,

  },

});

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

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

  }

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

    const { classes } = this.props;
    const { vertical, horizontal, openLuiz, openAntonio, openBueno, openBarbosa } = this.state;

    return (

      <div>

        <div className={classes.root}>

          <AppBar position="static" color="default">

            <Toolbar>

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

            </Toolbar>

          </AppBar>

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

        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/activity" component={LastActivity} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route component={Whoops404} />
        </Switch>

      </div>

    );

  }

}

App.propTypes = {

  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(App);
