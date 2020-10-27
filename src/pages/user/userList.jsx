import React from 'react'
import LeftNav from '../../components/LeftNav/LeftNav'
import axios from 'axios'
import DisplayTable from '../../components/Table/DisplayTable'
import { Button } from 'antd';
import '../user/userList.less'
import {
    PlusCircleOutlined
  } from '@ant-design/icons';

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:[]
        }
        
    }
    componentDidMount(){
        axios.get('/manage/user/list')
        .then((response) => {
            const userData = response.data.data.users
            console.log('user:' + JSON.stringify(response.data.data.users));
            console.log(JSON.stringify(userData) + "1111")
            this.setState({
                user : userData
            })          
        })
        .catch((error) => {
            console.log(error);
        });
    }

    userCreate = ()=>{
        window.location.href = '/userList/userCreate'
    }
    
    render() {
        
        return (
            <div>
            <LeftNav leftnav = {<DisplayTable userTable={this.state.user}></DisplayTable>}>
            </LeftNav>
            <Button className='createUser' type="primary" onClick={this.userCreate}>
            <PlusCircleOutlined />
            创建用户
            </Button>
            </div>
        )
    }
}
export default UserList 