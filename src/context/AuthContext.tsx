import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

type AuthContextData = {
  user: IUser;
  signIn(dto: SignInDTO): Promise<void>;
  signOut(): void;
};

type AuthData = {
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
  const [authData, setAuthData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');

    if (token && user) return { token, user: JSON.parse(user) };
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }: SignInDTO) => {
    const response = await api.post<HttpAuthResponse>('/authentication', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@gobarber:token', token);
    localStorage.setItem('@gobarber:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gobarber:token');
    localStorage.removeItem('@gobarber:user');

    setAuthData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used inside an AuthProvider');

  return context;
};
