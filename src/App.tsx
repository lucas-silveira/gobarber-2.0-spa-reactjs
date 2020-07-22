import React from 'react';

import GlobalStyle from './styles/global';
import ToastContainer from './components/ToastContainer';
import { SignIn, SignUp } from './pages';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
