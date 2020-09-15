import React, { createContext, useState, useEffect } from 'react';
import { loginService } from '@services/UserService';
import { IUserLogin, IUserContext, IAuthContextData } from '@interfaces/UserInterface';
import { AxiosResponse } from 'axios';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserContext | null>(null);

  useEffect(() => {
    console.log('useEffect ok!', user);
    async function loadStorageData() {
      const storagedToken = localStorage.getItem('userToken');
      const storagedUserId = localStorage.getItem('userId');
      const storagedEmail = localStorage.getItem('userEmail');

      if (storagedUserId && storagedToken && storagedEmail) {
        setUser({ token: storagedToken, email: storagedEmail, userId: storagedUserId });
      }
    }

    loadStorageData();
  }, []);

  const signIn = async (body: IUserLogin): Promise<AxiosResponse<IUserContext>> => {
    const response = await loginService(body);
    const { token, userId, email } = response.data;

    setUser(response.data);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userToken', token);
    localStorage.setItem('userEmail', email);
    return response;
  };

  const clearLocalStorageAuthData = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
  };

  const signOut = (): IUserContext | null => {
    setUser(null);
    clearLocalStorageAuthData();

    return user;
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user && !!user.userId, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
