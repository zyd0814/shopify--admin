import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Card>
          hello world
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
