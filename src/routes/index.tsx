import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import { SignIn, SignUp, Dashboard } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" exact component={SignUp} />

    <Route path="/dashboard" exact isPrivate component={Dashboard} />
  </Switch>
);

export default Routes;
