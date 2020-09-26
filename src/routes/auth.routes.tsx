import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '@components/Home/Home';
import Login from '@components/Forms/Login';
import NotFound from '@sharedPages/NotFound';
import UserPage from '../Pages/Users';

interface IDictionaryPages {
  [key: string]: React.FC;
}

const pages: IDictionaryPages = {
  '/home': Home,
  '/users': UserPage,
};

const AuthRoutes: React.FC = () => {
  const page = window.location.pathname;

  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/main-page" component={Login} />
      <Route path="/users" component={Login} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default AuthRoutes;
