import React, { createContext, useState, useCallback, useContext } from 'react';

import AuthControllerFactory from '../../main/controllers/web/react/Auth/AuthController.factory';
import { IAuth } from '../../domain/entities/Auth.interface';
import { IUser } from '../../domain/entities/User.interface';

const { createAuth, getAuth, removeAuth } = AuthControllerFactory();

type AuthContextData = {
  user: Omit<IUser, 'password'>;
  signIn(dto: SignInDTO): Promise<void>;
  signOut(): void;
};

type SignInDTO = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuth>(() => {
    const { token, user } = getAuth.handle();

    if (token && user) return { token, user };
    return {} as IAuth;
  });

  const signIn = useCallback(async ({ email, password }: SignInDTO) => {
    const response = await createAuth.handle({ email, password });

    const { token, user } = response;

    setAuthData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    removeAuth.handle();

    setAuthData({} as IAuth);
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
