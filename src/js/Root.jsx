/* eslint import/no-extraneous-dependencies: 0 */
import '../scss/app.scss';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

const Root = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Root;
