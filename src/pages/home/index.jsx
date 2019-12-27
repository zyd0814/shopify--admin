import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Card>
          首页
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
