import React from 'react';

import Layout from '../components/common/Layout';
import SendRequest from '../components/user/SendRequest';

const UserSendRequest = () => {
  const content = '';
  return (
    <Layout
      tab="new-request"
      title="Gửi kiến nghị - phản ánh mới"
    >
      {content}
      <SendRequest />
    </Layout>
  );
};

export default UserSendRequest;
