import React from 'react';
import Navbar from './Components/Navbar';
import User from './Components/User';
import './App.css';

function App() {
  return (
    <div className="container">
          <Navbar title="User App"/>
          <hr/>
          <User
          name = "Oguzhan Osma"
          department = "NRD1121"
          salary ="4753 TRY"/>
          <User
          name = "Ayşe Fatma"
          department = "NRD1121"
         />
    </div> 
  );
}

export default App;
