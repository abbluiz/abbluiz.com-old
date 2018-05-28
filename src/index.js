import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import {createMuiTheme, MuiThemeProvider} from "material-ui";

import './index.css';

import Website from './Website/Website';
import themeSettings from './theme';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme(themeSettings);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Route component={Website} />
    </BrowserRouter>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();