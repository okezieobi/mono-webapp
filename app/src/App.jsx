import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Balances from './Components/Balances';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/balances">
            <Balances />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

function TestApp() {
  return (
    <>
      <Switch>
        <Route path="/balances">
          <Balances />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export { App, TestApp };
