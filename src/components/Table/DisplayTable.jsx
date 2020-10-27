import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    render: text => <a>{text}</a>,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


class DisplayTable extends React.Component {

  constructor(props) {
    super(props);
  }
  
  
  render() {
    console.log(JSON.stringify(this.props.userTable) + "12346")
    return (
      <Table  rowKey="_id" columns={columns} dataSource={this.props.userTable} />
    )
      
    }
     
  }

export default DisplayTable