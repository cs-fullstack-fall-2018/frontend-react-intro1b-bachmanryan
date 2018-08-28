import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentAcount from './StudentAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <StudentAcount/>
      </div>
    );
  }
}

export default App;

// Make sure you create the variables in this component and send them to the StudentAccount component.
