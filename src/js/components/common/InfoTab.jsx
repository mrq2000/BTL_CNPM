import React from 'react';
import { Tabs, Tab, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  tab: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),

    fontWeight: 'bold',
    color: '#434140',
    textTransform: 'none',
    borderBottom: '1px solid #846d6a',
  },
  title: {
    maxWidth: 300,
    whiteSpace: 'initial',

    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  tabs: {
    paddingBottom: theme.spacing(2),
    borderRight: `0.5px solid ${theme.palette.divider}`,
    backgroundColor: '#fbd5cd',
  },
}));

const InfoTab = ({ currentValue }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = () => firebase.auth().signOut().then(() => {
    history.push('/sign-in');
  });

  return (
    <Tabs
      value={currentValue}
      orientation="vertical"
      className={classes.tabs}
    >
      <div className={classes.title}>
        <Typography variant="h6" align="center">
          Thông tin tài khoản
        </Typography>
      </div>
      <Tab
        value="account-info"
        label="Thông tin cá nhân"
        to="/user/info"
        component={Link}
        className={classes.tab}
      />
      <Tab
        value="change-password"
        label="Đổi mật khẩu"
        to="/user/change-password"
        component={Link}
        className={classes.tab}
      />
      <Tab
        value="log-out"
        label="Đăng xuất"
        component={Link}
        onClick={handleSignOut}
        className={classes.tab}
      />
    </Tabs>
  );
};

InfoTab.propTypes = {
  currentValue: PropTypes.string.isRequired,
};

export default InfoTab;
