import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import BinToDec from './pages/BinToDec';
import BorderRadiusPrev from './pages/BorderRadiusPrev';
import Calculator from './pages/Calculator';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/BinToDec" component={BinToDec}/>
        <Route path="/BorderRadiusPrev" component={BorderRadiusPrev}/>
        <Route path="/Calculator" component={Calculator}/>
      </Switch>
  </BrowserRouter>
  );
}

export default Routes;