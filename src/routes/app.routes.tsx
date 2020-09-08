import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '@components/Home/Home';
import Login from '@components/Forms/Login';
import NotFound from '@sharedPages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/main-page" exact to="/login" />
      <Redirect from="/" exact to="/home" />
      <Redirect from="/" to="/not-found" />
    </Switch>
  );
};

export default AppRoutes;
