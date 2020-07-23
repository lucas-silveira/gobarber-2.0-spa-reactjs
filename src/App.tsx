import React from 'react';

import GlobalStyle from './styles/global';
import { SignIn, SignUp } from './pages';

import AppProvider from './context';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
