import React from 'react'
import { Layout, Menu } from 'antd';
import './LeftNav.less'
import UserLogin from '../../components/userLogin/UserLogin'
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {BrowserRouter as Router,Link} from 'react-router-dom'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//登录后的主页面
class LeftNav extends React.Component {
  constructor(props){
    super(props);
}

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible collapsed={collapsed}
          onCollapse={this.onCollapse}>
          <div className="logo"  >
            <div className='title'>XX科技</div>
          </div>
          <Menu
            theme="dark" defaultSelectedKeys={['1']} mode="inline">
              
            <Menu.Item key="2" icon={<DesktopOutlined />} >
            
              <Link to='/admin'>首页</Link>
              
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="用户和用户组">
              <Menu.Item key="1">
              <Link to='/userList'>用户管理</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
                  </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            {/* 引入UserLogin组件，实现用户的登录状态展示和退出登录 */}
            <div className='username'><UserLogin /></div>
          </Header>
          <br />
          <Content>
      
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* 接收父组件leftnav数据，达到渲染数据的目的 */}
            {this.props.leftnav}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }


}
export default LeftNav