import { useAuth } from '@contexts/authContext';
import { IUserLogin } from '@interfaces/UserInterface';
import PageNotFound from '@sharedPages/NotFound';
import React, { FormEvent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { StyledInput, StyledLabel } from './InputForm';

const Login: React.FC<RouteComponentProps> = (props) => {
  const { signed, signIn } = useAuth();

  const [userLogin, setUSerLoginData] = useState<IUserLogin>({
    email: '',
    password: '',
  });

  const [showHasError, setShowHasError] = useState({
    error: false,
  });

  const onBlurForm = (e: React.FormEvent) => {
    e.persist();
    e.preventDefault();
    const { name } = e.target as HTMLFormElement;
    const { value } = e.target as HTMLFormElement;

    setUSerLoginData({
      ...userLogin,
      [name]: value,
    });
  };

  const onSubmitForm = async (e: FormEvent) => {
    e.persist();
    e.preventDefault();
    try {
      const loggedUser = await signIn(userLogin);

      if (props.history.location.pathname) return;

      props.history.push({ pathname: '/main-page' });
    } catch (err) {
      setShowHasError({
        error: true,
      });
    }
  };

  const backLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHasError({
      error: false,
    });
  };

  return showHasError.error ? (
    <div>
      <PageNotFound />
      <button type="button" onClick={backLogin}>
        Back Login
      </button>
    </div>
  ) : (
    <form onSubmit={onSubmitForm}>
      <StyledLabel htmlFor="email">
        Email
        <StyledInput type="email" name="email" onBlur={onBlurForm} autoComplete="on" />
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
  );
};

export default Login;
