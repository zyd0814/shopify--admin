import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,Layout } from 'antd';

const { Sider, Content } = Layout;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <PageHeaderWrapper>

        <Layout>
          <Content>
            <Card>
              Content test
            </Card>
          </Content>
          <Sider>
            <Card>
              Content world
            </Card>
          </Sider>
        </Layout>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
