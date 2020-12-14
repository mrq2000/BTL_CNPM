/* eslint import/no-extraneous-dependencies: 0 */
import '../scss/app.scss';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import PrivateRoute from './PrivateRoute';

import theme from './theme';
import UserRequestInfo from './pages/UserRequestInfo';
import UserRequestList from './pages/UserRequestList';
import UserSendRequest from './pages/UserSendRequest';
import UserNotification from './pages/UserNotification';
import UserInfo from './pages/UserInfo';
import UserChangePassword from './pages/UserChangePassword';
import UserManageInfo from './pages/UserManageInfo';

import AdminNotification from './pages/AdminNotification';
import AdminInfo from './pages/AdminInfo';
import AdminRequestList from './pages/AdminRequestList';
import AdminStatistic from './pages/AdminStatistic';
import ThirdPartyInfo from './pages/ThirdPartyInfo';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './firebase';

const queryCache = new QueryCache();

const Root = () => (
  <BrowserRouter>
    <div>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <CssBaseline />

            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />

              <PrivateRoute exact path="/admin/notification" component={AdminNotification} />
              <PrivateRoute exact path="/admin/request-list" component={AdminRequestList} />
              <PrivateRoute exact path="/admin/request-analysis" component={AdminStatistic} />
              <PrivateRoute exact path="/admin/request-info/:requestId" component={UserRequestInfo} />
              <PrivateRoute exact path="/admin/change-password" component={UserChangePassword} />
              <PrivateRoute exact path="/admin/info" component={AdminInfo} />
              <PrivateRoute exact path="/admin/third-party" component={ThirdPartyInfo} />

              <PrivateRoute exact path="/user/notification" component={UserNotification} />
              <PrivateRoute exact path="/user/new-request" component={UserSendRequest} />
              <PrivateRoute exact path="/user/info" component={UserInfo} />
              <PrivateRoute exact path="/user/change-password" component={UserChangePassword} />
              <PrivateRoute exact path="/user/request-list" component={UserRequestList} />
              <PrivateRoute exact path="/user/request-info/:requestId" component={UserRequestInfo} />
              <PrivateRoute exact path="/user/manage-info" component={UserManageInfo} />
            </Switch>
          </ReactQueryCacheProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  </BrowserRouter>
);

export default Root;
