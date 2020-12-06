import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../components/common/Layout';
import RequestList from '../components/user/RequestList';

const UserRequestList = () => {
  const content = '';
  return (
    <Layout
      tab="request-list"
      title="Danh sách kiến nghị - phản ánh đã gửi"
    >
      {content}
      <Grid container spacing={3}>
        <Grid item container justify="flex-end">
          <Typography style={{ fontStyle: 'italic' }}>
            Ấn vào từng kiến nghị - phản ánh để xem chi tiết
          </Typography>
        </Grid>

        <Grid item container>
          <RequestList />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserRequestList;
