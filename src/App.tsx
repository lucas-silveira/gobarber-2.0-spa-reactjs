import React from 'react';

import GlobalStyle from './styles/global';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignIn />
  </>
);

export default App;
