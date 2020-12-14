import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import UserInfo from './UserInfo';
import ManageTab from './ManageTab';
import InfoTab from './InfoTab';
import AdminTab from './AdminTab';
import AdminInfo from './AdminInfo';
import AdminInfoTab from './AdminInfoTab';

import useManageInfo from '../../data/useManageInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#f67c30',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(3),
  },
  line: {
    height: 1,
    backgroundColor: '#fbccb5',
    width: '90%',
    marginBottom: theme.spacing(1),
  },
}));

const Layout = ({ children, tab, title }) => {
  const classes = useStyles();
  const { data, isLoading, error } = useManageInfo();

  if (isLoading && error) return <></>;
  return (
    <>
      <Header />
      <div className={classes.root}>
        {
          data ? (
            <Box display="flex" flexDirection="column">
              <AdminInfo />
              <AdminTab currentValue={tab} />
              <div className={classes.marginTop} />
              <AdminInfoTab currentValue={tab} />
            </Box>
          ) : (

            <Box display="flex" flexDirection="column">
              <UserInfo />
              <ManageTab currentValue={tab} />
              <div className={classes.marginTop} />
              <InfoTab currentValue={tab} />
            </Box>
          )
        }

        <div className={classes.mainContent}>
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Typography align="center" variant="h5" className={classes.title}>
              {title}
            </Typography>
            <div className={classes.line} />
          </Box>
          {children}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
