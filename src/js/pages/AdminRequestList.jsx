import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

import Layout from '../components/common/Layout';
import AdminRequestListComponent from '../components/admin/AdminRequestList';

const useStyles = makeStyles(() => ({
  button: {
    color: '#fff',
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#f67c30',
  },
}));

const AdminRequestList = () => {
  const classes = useStyles();

  return (
    <Layout
      tab="request-list"
      title="Danh sách kiến nghị - phản ánh"
    >
      <Box>
        <Box display="flex" justifyContent="space-around">
          <Button className={classes.button}>
            Gửi phản hồi cho người dân
          </Button>
          <Button className={classes.button}>
            Gửi ý kiến đến cơ quan tổ chức
          </Button>
        </Box>

        <Box mt={4}>
          <AdminRequestListComponent />
        </Box>
      </Box>
    </Layout>
  );
};

export default AdminRequestList;
