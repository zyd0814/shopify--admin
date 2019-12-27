import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Input, Select, Table, Button, Modal } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    address: '西湖区湖底公园1号',
    orderNumber: 44,
    price: 23
  },
  {
    key: '2',
    name: '胡彦祖',
    address: '西湖区湖底公园1号',
    orderNumber: 44,
    price: 23
  },
  {
    key: '3',
    name: '胡彦祖',
    address: '西湖区湖底公园1号',
    orderNumber: 44,
    price: 23
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '订单数量',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '总价',
    dataIndex: 'price',
    key: 'price',
  },
];
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <PageHeaderWrapper>
        <div>
          <Card
            style={{ width: '100%' }}
            title='所有'
            extra={<Button type="primary" onClick={this.showModal}>添加客户</Button>}
          >
            <InputGroup compact >
              <Select defaultValue="Zhejiang">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
              <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
            </InputGroup>
            <Table dataSource={dataSource} columns={columns} />;
          </Card>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
