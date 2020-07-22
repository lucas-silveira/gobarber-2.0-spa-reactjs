import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

type AuthContextData = {
  state: Omit<AuthState, 'token'>;
  signIn(dto: SignInDTO): Promise<void>;
  signOut(): void;
};

type AuthState = {
  token: string;
  user: IUser;
};

type SignInDTO = {
  email: string;
  password: string;
};

type HttpAuthResponse = {
  token: string;
  user: IUser;
};

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');

    if (token && user) return { token, user: JSON.parse(user) };
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInDTO) => {
    const response = await api.post<HttpAuthResponse>('/authentication', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@gobarber:token', token);
    localStorage.setItem('@gobarber:user', JSON.stringify(user));

    setAuthState({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gobarber:token');
    localStorage.removeItem('@gobarber:user');

    setAuthState({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ state: { user: authState.user }, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used inside an AuthProvider');

  return context;
};
