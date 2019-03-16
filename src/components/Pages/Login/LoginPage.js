import React, { Component } from 'react';
import Auth from '../../Auth/Auth'

const auth = new Auth();

export class LoginPage extends Component {
    render() {
      auth.login();
      return(<div></div>);
    }
  }
  
  //export default LoginPage;