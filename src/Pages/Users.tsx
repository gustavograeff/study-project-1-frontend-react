import { IUserBase } from '@interfaces/UserInterface';
import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const Users: React.FC = () => {
  const onClickGetUsers = async (): Promise<AxiosResponse<IUserBase>> => {
    try {
      return (await axios.get('http://localhost:8080/user')).data;
    } catch (err) {
      console.log('err => ', err);
      return err;
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <button type="button" onClick={onClickGetUsers}>
        Users
      </button>
    </div>
  );
};

export default Users;
