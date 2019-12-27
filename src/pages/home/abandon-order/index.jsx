import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, DatePicker, Select, Input, Table, Button } from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;
const {Option} = Select;
const {Search} = Input;
const columns = [{
  title: '订单编号',
  dataIndex: 'name',
}, {
  title: '时间',
  dataIndex: 'age',
}, {
  title: '邮件状态',
  dataIndex: 'address',
}, {
  title: '召回状态',
  dataIndex: 'address',
}, {
  title: '总金额',
  dataIndex: 'address',
}];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
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
          <div>
            <RangePicker
              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
              showTime
              format="YYYY/MM/DD HH:mm:ss"
              onChange={onChange}
            />
            <Select defaultValue="召回状态" style={{ width: 120,marginLeft: 30, marginRight:30}} onChange={handleChange}>
              <Option value="召回状态">召回状态</Option>
              <Option value="测试一">测试一</Option>
              <Option value="测试二">测试二</Option>
            </Select>
            <Search
              placeholder="input search text"
              style={{ width: 400 }}
              onSearch={value => console.log(value)}
            />
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
