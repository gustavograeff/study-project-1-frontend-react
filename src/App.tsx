import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '@components/Home/Home';
import Login from '@components/Forms/Login';
import MainPage from '@components/MainPage/MainPage';
import NotFound from '@sharedPages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/main-page" component={MainPage} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
