import React, { createContext, useState } from 'react';
import { loginService } from '@services/User';
import { IUserLogin, IUserContext, IAuthContextData } from '@interfaces/User';
import { AxiosResponse } from 'axios';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserContext | null>(null);

  const signIn = async (body: IUserLogin): Promise<AxiosResponse<IUserContext>> => {
    const response = await loginService(body);

    setUser(response.data);

    return response;
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
