import axios, { AxiosResponse } from 'axios';
import { IUserLogin } from '@interfaces/User';
import { baseUrl, loginUrl } from './Consts';

interface IUsersList extends AxiosResponse {
  data: Array<IUser>;
}

interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const getAllUsers = async () => {
  try {
    const users: IUsersList = await axios.get(`${baseUrl}/users`);
    console.log(users.data);
  } catch (err) {
    console.log('err => ', err);
    // throw new Error(err);
  }
};

export const login = async (body: IUserLogin) => {
  console.log('login body => ', body);
  try {
    const loginReturn = await axios.post(`${loginUrl}`, body);
    console.log(loginReturn.data);
  } catch (err) {
    console.log('err => ', err);
  }
};
