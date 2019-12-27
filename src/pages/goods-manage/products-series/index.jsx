import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Tabs, Select, Input, Icon, Table, Button } from 'antd';

const {TabPane} = Tabs;
const {Option} = Select;
const columns = [{
  title: '标题',
  dataIndex: 'name',
}, {
  title: '产品条件',
  dataIndex: 'age',
}];
const data = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32
  });
}
const operations = <Button type="primary">创建产品系列</Button>;
function handleChange(value) {
  console.log(`selected ${value}`);
}
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  // eslint-disable-next-line react/sort-comp
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  start = () => {
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <PageHeaderWrapper>
        <Card>
          <Tabs defaultActiveKey="1"  tabBarExtraContent={operations}>
            <TabPane tab="所有" key="1">
              <div>
                <Select defaultValue="筛选条件" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="筛选条件">筛选条件</Option>
                  <Option value="测试一">测试一</Option>
                  <Option value="测试二">测试二</Option>
                </Select>
                <Input
                  placeholder="Enter your userName"
                  prefix={<Icon type="search" />}
                  suffix={suffix}
                  value={userName}
                  style={{ width: 500 }}
                  onChange={this.onChangeUserName}
                />
              </div>
              <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </TabPane>
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
