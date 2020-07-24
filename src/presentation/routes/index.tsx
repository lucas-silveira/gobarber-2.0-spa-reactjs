import React from 'react';
import { Switch } from 'react-router-dom';

import pagesConfig from '../../configs/pages';
import Route from './Route';
import pages from '../pages';

const Routes: React.FC = () => (
  <Switch>
    {pagesConfig.map(page => (
      <Route
        key={page.path}
        path={page.path}
        exact
        isPrivate={page.isPrivate}
        component={pages[page.name]}
      />
    ))}
  </Switch>
);

export default Routes;
