import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Accounts from './Components/Accounts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/accounts">
            <Accounts />
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
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export { App, TestApp };
