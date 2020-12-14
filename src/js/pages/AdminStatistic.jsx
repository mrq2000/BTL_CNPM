import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/common/Layout';
import AdminStatisticComponent from '../components/admin/AdminStatistic';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

const AdminStatistic = () => {
  const classes = useStyles();

  return (
    <Layout
      tab="request-analysis"
      title="Thống kê kiến nghị phản ánh"
    >
      <div className={classes.container}>
        <AdminStatisticComponent />
      </div>
    </Layout>
  );
};

export default AdminStatistic;
