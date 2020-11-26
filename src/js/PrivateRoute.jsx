/* eslint react/prop-types: 0, react/jsx-props-no-spreading: 0 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import LinearProgress from '@material-ui/core/LinearProgress';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  });
  if (loading) return <LinearProgress color="secondary" />;
  if (user && path.startsWith('/admin')) {
    if (user.email !== 'admin@cnpm.com') {
      return (
        <Redirect
          to={{
            pathname: '/user/info',
            state: { from: rest.location },
          }}
        />
      );
    }
  }

  return (
    <Route
      {...rest}
      render={
        (props) => (user
          ? (<Component {...props} />)
          : (
            <Redirect
              to={{
                pathname: '/sign-in',
                state: { from: props.location },
              }}
            />
          ))
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
