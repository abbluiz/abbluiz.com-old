import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import {AppBar, Toolbar, Typography} from "material-ui";


const styles = {

  root: {

    flexGrow: 1,

  },

};

function NavigationBar(props) {

  const { classes } = props;

  return (

    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            LABB
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  );
}

NavigationBar.propTypes = {

  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(NavigationBar);