import React, { Component } from 'react';
import DashBoard from './DashBoard/DashBoard';
import TopBar from './TobBar/TopBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <DashBoard/>
      </div>
    );
  }
}

export default App;
