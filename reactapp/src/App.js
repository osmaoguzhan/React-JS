import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Users from './Components/Users';

class App extends Component{
render() {
  return (
    <div className="container">
          <Navbar title="User App"/>
          <hr/>
          <Users/>
    </div> 
  );
}
}
export default App;
