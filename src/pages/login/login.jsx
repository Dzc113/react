import React from 'react'
import './login.less'
//import { reqLogin } from '../../api/index'
import axios from 'axios'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import memoryUntils from '../../untils/memoryUntils'
import storageUtils from '../../untils/storageUtils'
//import { Redirect } from 'react-router-dom'


//登录的路由组件
class Login extends React.Component {

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post('/login', values
        ).then(function (response) {
            console.log(response.data.status + '!!!')
            if (response.data.status === 0) {
                message.success('登录成功')
                //保存api返回的user
                const user = response.data.data
                console.log(user + 'zheshi')
                storageUtils.saveUser(user);
                //存在内存
                memoryUntils.user = user
                console.log(JSON.stringify(user) + '2222')
                //this.props.history.replace('/admin')
                //return <Redirect from ='/login' to = '/admin' />;
                window.location.href = '/admin'
            } else {
                message.error(response.data.msg)
            }
        }).catch(function (error) {
            console.log(error + '@@@@')
        })
    };


    //自定义验证
    validatorPwd = (rules, value, callback) => {
        if (!value) {
            return Promise.reject('密码不能为空')
        } else {
            return Promise.resolve();
        }
    }

    render() {

        return (
            <div className="login">
                <header className="login-header">
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-section">
                    <h2>用户登录</h2>
                    <Form onFinish={this.onFinish}
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, whitespace: true, message: '用户名不能为空' },
                            { min: 4, message: '用户名长度不能小于4位' },
                            { max: 12, message: '用户名长度不能超过12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能输入英文、数字和下划线_' }
                            ]}
                        >

                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { validator: this.validatorPwd }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" >
                                Log in
                       </Button>
                        </Form.Item>

                    </Form>
                </section>
            </div>
        )
    }
}


export default Login;