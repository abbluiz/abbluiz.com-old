import React, { Component } from 'react';
import {createMuiTheme, MuiThemeProvider} from "material-ui";
import NavigationBar from "./Navigation/NavigationBar";

const theme = createMuiTheme({

  palette: {

    type: 'dark',

    primary: {

      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',

    },

    secondary: {

      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',

    },

  },

});

class App extends Component {

  render() {

    return (

      <MuiThemeProvider theme={theme}>
        <NavigationBar />
      </MuiThemeProvider>

    );

  }

}

export default App;
