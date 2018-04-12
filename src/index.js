import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {createMuiTheme, MuiThemeProvider} from "material-ui";

import './index.css';

import App from './components/Site';
import registerServiceWorker from './registerServiceWorker';

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
      dark: '#a14040',
      contrastText: '#000',

    },

  },

});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
