import React from 'react';
import Layout from '../components/common/Layout';
import ManageInfo from '../components/user/ManageInfo';

const UserNotification = () => {
  const content = '';
  return (
    <Layout
      tab="manage-info"
      title="Thông tin về các tổ trưởng"
    >
      {content}
      <ManageInfo />
    </Layout>
  );
};

export default UserNotification;
