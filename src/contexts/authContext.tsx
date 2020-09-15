import { IAuthContextData, IUserContext, IUserLogin } from '@interfaces/UserInterface';
import { loginService } from '@services/UserService';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IAxiosBaseHeaders extends AxiosRequestConfig {
  Authorization?: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserContext | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = localStorage.getItem('userToken');
      const storagedUserId = localStorage.getItem('userId');
      const storagedEmail = localStorage.getItem('userEmail');

      if (storagedUserId && storagedToken && storagedEmail) {
        const axiosBaseHeaders: IAxiosBaseHeaders = axios.defaults;
        axiosBaseHeaders.Authorization = `Bearer ${storagedToken}`;

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

    const axiosBaseHeaders: IAxiosBaseHeaders = axios.defaults;
    axiosBaseHeaders.Authorization = `Bearer ${token}`;

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

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
