import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import memoryUntils from '../../untils/memoryUntils'
import storageUtils from '../../untils/storageUtils'
import {Redirect} from 'react-router-dom'

//用户登录状态组件，展示用户的登录状态和退出登录
const menu = (
    <Menu>
      <Menu.Item>
        <a href="/login" rel="noopener noreferrer" onClick={storageUtils.delUser}>
          退出
        </a>
      </Menu.Item>
    </Menu>
  );

class UserLogin extends React.Component{

      render(){
        const user = storageUtils.getUser()
        memoryUntils.user = user
        console.log(JSON.stringify(user) + '1111')
        if(!user){
            return <Redirect to = '/login' />
        }
          return ( <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {user.username} <DownOutlined />
            </a>
          </Dropdown>)
      } 
      
}
export default UserLogin

