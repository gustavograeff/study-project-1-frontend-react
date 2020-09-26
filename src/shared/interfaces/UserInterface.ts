import { AxiosResponse } from 'axios';

export interface IUserBase {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserContext {
  email: string;
  token: string;
  userId: string;
}

export interface IAuthContextData {
  signed: boolean;
  user: object | null;
  signIn(body: IUserLogin): Promise<AxiosResponse<IUserContext>>;
  signOut(): IUserContext | null;
}
