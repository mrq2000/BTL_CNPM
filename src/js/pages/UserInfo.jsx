import React from 'react';
import Layout from '../components/common/Layout';
import UserInfoComponent from '../components/user/UserInfo';

const UserInfo = () => {
  const content = '';
  return (
    <Layout
      tab="account-info"
      title="Thông tin cá nhân"
    >
      {content}
      <UserInfoComponent />
    </Layout>
  );
};

export default UserInfo;
