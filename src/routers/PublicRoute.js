import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = (
  {
    component: Component,
    ...rest
  }) => (
  <Route {...rest} component={
    props => {
      return (
        <Component {...props} />
      );
    }
  }/>
);

export default PublicRoute;
