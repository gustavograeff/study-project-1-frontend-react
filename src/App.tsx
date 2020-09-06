import React, { FormEvent, useState, useEffect } from 'react';
import { IUserLogin } from '@interfaces/User';
import { login } from '@services/User';

const App: React.FC = () => {
  const [userLogin, setUSerLoginData] = useState<IUserLogin>({
    email: '',
    password: ''
  });

  useEffect(() => {
  }, [userLogin]);

  const onBlurForm = (e: React.FormEvent) => {
    e.persist();
    const { name } = e.target as HTMLFormElement;
    const { value } = e.target as HTMLFormElement;

    setUSerLoginData({
      ...userLogin,
      [ name ]: value
    });
  };

  const onSubmitForm = (e: FormEvent) => {
    e.persist();
    e.preventDefault();
    login(userLogin);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" onBlur={onBlurForm} autoComplete="on" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onBlur={onBlurForm} autoComplete="on" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;
