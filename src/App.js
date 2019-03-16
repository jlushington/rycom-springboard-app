import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import {LoginPage} from './components/Pages/Login/LoginPage'
import {DashboardPage} from './components/Pages/Dashboard/DashboardPage'

class App extends Component {


  render() {
    return (
      <div>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/dashboard" component={DashboardPage}></Route>


            </div>
    );
  }
}

export default App;
