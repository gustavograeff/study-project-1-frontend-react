import React, { FormEvent, useState, useEffect } from 'react';
import { IUserLogin } from '@interfaces/User';
import { loginService } from '@services/User';
import PageNotFound from '@sharedPages/NotFound';
import { StyledInput, StyledLabel } from './InputForm';

const Login: React.FC = () => {
  const [userLogin, setUSerLoginData] = useState<IUserLogin>({
    email: '',
    password: ''
  });

  const [showHasError, setShowHasError] = useState({
    error: false
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

  const onSubmitForm =  async (e: FormEvent) => {
    e.persist();
    e.preventDefault();
    try {
      const loggedUser = await loginService(userLogin);
    } catch (err) {
      setShowHasError({
        error: true
      });
    }
  };

  const backLogin = () => {
    setShowHasError({
      error: false
    });
  };

  return (
    showHasError.error
      ? (
        <div>
          <PageNotFound />
          <button type="button" onClick={backLogin}>Back Login</button>
        </div>)
      : (
        <form onSubmit={onSubmitForm}>
          <StyledLabel htmlFor="email">
            Email
            <StyledInput
              type="email"
              name="email"
              onBlur={onBlurForm}
              autoComplete="on"
            />
          </StyledLabel>
          <StyledLabel htmlFor="password">
            Password
            <StyledInput
              type="password"
              name="password"
              onBlur={onBlurForm}
              autoComplete="on"
            />
          </StyledLabel>
          <input type="submit" value="Submit" />
        </form>
      )
  );
};

export default Login;
