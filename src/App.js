import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <hi>Hi, I am a React App</hi>
        <p>I'm a person</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    /* return React.createElement('div', {className: 'App'},
     *                            React.createElement('h1', null, 'Hello from createElement')); */
  }
}

export default App;
