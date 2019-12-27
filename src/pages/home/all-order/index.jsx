import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Tabs, Card, Button, Input, Select, Table } from 'antd';

const {TabPane} = Tabs;
const {Option} = Select;
const columns = [{
  title: '订单',
  dataIndex: 'name',
}, {
  title: '日期',
  dataIndex: 'age',
}, {
  title: '客户',
  dataIndex: 'address',
}, {
  title: '付款',
  dataIndex: 'address',
}, {
  title: '发货',
  dataIndex: 'address',
}, {
  title: '总计',
  dataIndex: 'address',
}];
const data = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const operations = <Button>所有地点</Button>;
const opeHead = <div><Input placeholder="Basic usage" style={{ width: 200 }} /><Select defaultValue="状态" style={{ width: 120 }} onChange={handleChange}>
  <Option value="状态">状态</Option>
  <Option value="测试一">测试一</Option>
  <Option value="测试二">测试二</Option>
  <Option value="测试三">测试三</Option>
</Select>
  <Select defaultValue="付款状态" style={{ width: 120 }} onChange={handleChange}>
    <Option value="付款状态">付款状态</Option>
    <Option value="未付款">未付款</Option>
    <Option value="已付款">已付款</Option>
  </Select>
  <Select defaultValue="发货状态" style={{ width: 120 }} onChange={handleChange}>
    <Option value="发货状态">发货状态</Option>
    <Option value="未发货">未发货</Option>
    <Option value="已发货">已发货</Option>
  </Select></div>;

function callback(key) {
  console.log(key);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    // eslint-disable-next-line react/no-unused-state
    loading: false,
  };

  start = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        // eslint-disable-next-line react/no-unused-state
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <PageHeaderWrapper>
        <Card>
          <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
            <TabPane tab="所有" key="1">{opeHead}
              <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </TabPane>
            <TabPane tab="未结" key="2">{opeHead}
              <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </TabPane>
            <TabPane tab="未发货和部分发货" key="3">{opeHead}
              <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </TabPane>
            <TabPane tab="未付款" key="4">{opeHead}
              <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
