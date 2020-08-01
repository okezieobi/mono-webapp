import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export { App, TestApp };
