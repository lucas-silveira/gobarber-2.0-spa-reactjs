import React from 'react';
import { Pages } from '../../configs/pages';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

type PagesConfig = {
  [key in Pages]: React.FunctionComponent;
};

const pages: PagesConfig = {
  'sign-in': SignIn,
  'sign-up': SignUp,
  dashboard: Dashboard,
};

export default pages;
