import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationOptions from './NavigationOptions';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});

  handleDrawerClose = () => this.setState({open: false});

  render () {

    return (

      <div>
        <AppBar
          title="LABB"
          iconElementLeft={<IconButton onClick={this.handleDrawerToggle}><NavigationMenuIcon /></IconButton>}
          iconElementRight={<NavigationOptions />}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleDrawerClose}>Cool Link</MenuItem>
          <MenuItem onClick={this.handleDrawerClose}>Another One</MenuItem>
        </Drawer>
      </div>

    )

  }

}

export default NavigationBar;