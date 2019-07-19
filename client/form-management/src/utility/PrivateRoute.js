import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, token, ...rest }) => {
    console.log(token)
  return token ? (
    <Route {...rest} render={props => <Component {...props} token={token} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
