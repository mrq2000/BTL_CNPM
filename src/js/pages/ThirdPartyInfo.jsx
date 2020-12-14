import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/common/Layout';
import ThirdPartyInfoComponent from '../components/admin/ThirdPartyInfo';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

const ThirdPartyInfo = () => {
  const classes = useStyles();

  return (
    <Layout
      tab="third-party"
      title="Thông tin các cơ quan liên kết"
    >
      <div className={classes.container}>
        <ThirdPartyInfoComponent />
      </div>
    </Layout>
  );
};

export default ThirdPartyInfo;
