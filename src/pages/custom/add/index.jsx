import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Layout, Card, Form, Input, Checkbox, Select } from 'antd';

const { Sider, Content } = Layout;
const { Option } = Select;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {

    const selectAfter = (
      <Select defaultValue="中国" style={{ width: 80 }}>
        <Option value="中国">中国</Option>
        <Option value="日本">日本</Option>
        <Option value="美国">美国</Option>
        <Option value="中国香港">中国香港</Option>
      </Select>
    );
    return (
      <PageHeaderWrapper>
        <Layout>
          <Sider style={{background: 'none'}}>客户概述</Sider>
          <Content>
            <Card>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item label="名字"  >
                  <Input />
                </Form.Item>
                <Form.Item label="姓氏">
                  <Input />
                </Form.Item>
                <Form.Item label="电子邮件">
                  <Input />
                </Form.Item>
                <Form.Item label="电话号码">
                  <Input  addonAfter={selectAfter}/>
                </Form.Item>
                <Form.Item>
                  <Checkbox onChange={this.onChange}>客户接收营销</Checkbox>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Layout>

        <Layout>
          <Sider style={{background: 'none'}}>地址</Sider>
          <Content>
            <Card>
              <Form onSubmit={this.handleSubmit}>
                <Form layout='inline'>
                  <Form.Item label="First name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Last name">
                    <Input />
                  </Form.Item>
                </Form>

                <Form.Item label="Company">
                  <Input />
                </Form.Item>
                <Form.Item label="Address">
                  <Input />
                </Form.Item>
                <Form.Item label="Apartment,suite,etc">
                  <Input />
                </Form.Item>
                <Form.Item label="City">
                  <Input />
                </Form.Item>
                <Form.Item label="电话号码">
                  <Input  addonAfter={selectAfter}/>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Layout>

        <Layout>
          <Sider style={{background: 'none'}}>税金豁免</Sider>
          <Content>
            <Card>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item label="Address">
                  <Input placeholder='浏览或搜索' />
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Layout>

      </PageHeaderWrapper>
    );
  }
}

export default Index;
