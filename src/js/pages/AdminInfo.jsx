import React from 'react';
import Layout from '../components/common/Layout';
import AdminInfo from '../components/admin/AdminInfo';

const UserInfo = () => {
  const content = '';
  return (
    <Layout
      tab="account-info"
      title="Thông tin cá nhân"
    >
      {content}
      <AdminInfo />
    </Layout>
  );
};

export default UserInfo;
