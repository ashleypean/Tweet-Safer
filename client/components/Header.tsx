import React from 'react';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  
  return (
    <div className="header">
    <PageHeader
      className="site-page-header"
      title="TweetSafer"
      subTitle="A Better Way to Tweet"
      backIcon={true}
      onBack={() => history.goBack()}
    />
  </div>
  )
};

export default Header;