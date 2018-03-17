import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './Navigation/NavigationBar';
import NavigationTabs from "./Navigation/NavigationTabs";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavigationBar />
        <NavigationTabs />
      </MuiThemeProvider>
    );
  }
}

export default App;
