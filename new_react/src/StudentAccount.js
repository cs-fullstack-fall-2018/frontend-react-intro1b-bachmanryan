import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let newName = "Ryan";
let newGrade = "100";
class App extends Component {

    render() {
        return (

            <div className="App">
                <p>
                    My name is {newName} my grade is {newGrade}
                </p>
            </div>
        );
    }
}

export default App;

// Make sure you are calling your props from the parent component App instead of here. You're supposed to use this.props.[something] here
