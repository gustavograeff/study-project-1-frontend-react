import Home from '@components/Home/Home';
import MainPage from '@components/MainPage/MainPage';
import NotFound from '@sharedPages/NotFound';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserPage from '../Pages/Users';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/main-page" component={MainPage} />
      <Route path="/users" component={UserPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/login" exact to="/main-page" />
      <Redirect from="/" exact to="/home" />
      <Redirect from="/" to="/not-found" />
    </Switch>
  );
};

export default AppRoutes;
