import React from 'react';

 import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import PrivateRoute from './components/PrivateRoute';

import Registration from './pages/user-registration';
import UserList from './pages/users-list';
import Login from './pages/user-login';
import MapPage from './pages/map';
import NotFoundPage from './pages/404';

const RouterApp : React.FC = () => {
  return (
      <Switch>
        <Route exact  path="/" component={Login} />
        <Route path="/registration" component={Registration  } />
        <PrivateRoute path="/users" component={UserList} />
        <PrivateRoute path="/map" component={MapPage} />
        <Route path="*" component={NotFoundPage} /> 
        
        </Switch> 
  
  );
}




export default RouterApp;
