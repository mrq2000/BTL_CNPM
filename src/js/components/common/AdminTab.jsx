import React from 'react';
import { Tabs, Tab, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
    backgroundColor: '#fbd5cd',
  },
}));

const AdminTab = ({ currentValue }) => {
  const classes = useStyles();

  return (
    <Tabs
      value={currentValue}
      orientation="vertical"
      className={classes.tabs}
    >
      <div className={classes.title}>
        <Typography variant="h6" align="center">
          Quản lý kiến nghị - phản ánh
        </Typography>
      </div>
      <Tab
        value="notification"
        label="Thông báo"
        component={Link}
        to="/admin/notification"
        className={classes.tab}
      />
      <Tab
        value="request-list"
        label="Danh sách kiến nghị"
        component={Link}
        to="/admin/request-list"
        className={classes.tab}
      />
      <Tab
        value="request-analysis"
        label="Thống kê kiến nghị - phản ánh"
        component={Link}
        to="/admin/request-analysis"
        className={classes.tab}
      />
      <Tab
        value="third-party"
        label="Thông tin các cơ quan - tổ chức"
        component={Link}
        to="/admin/third-party"
        className={classes.tab}
      />
    </Tabs>
  );
};

AdminTab.propTypes = {
  currentValue: PropTypes.string.isRequired,
};

export default AdminTab;
