import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import UserList from './pages/user/userList'
import UserCreate from './pages/user/userCreate'

class App extends React.Component {
  
  render() {
    return (
      <Router>
      <Switch> {/*只匹配一个*/ }
      <Route path='/login' component={Login}></Route>
      <Route path='/admin' component={Admin}></Route>
      <Route path='/userList' component={UserList}></Route>
      <Route path='/userList/userCreate' component={UserCreate}></Route>
      </Switch>
      </Router>
    )
  }
}


export default App
