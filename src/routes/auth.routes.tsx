import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '@components/Home/Home';
import MainPage from '@components/MainPage/MainPage';
import NotFound from '@sharedPages/NotFound';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/main-page" component={MainPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/home" />
      <Redirect from="/" to="/not-found" />
    </Switch>
  );
};

export default AuthRoutes;

