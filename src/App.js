import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={()=>this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <p>I'm a person</p>
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}>My hobbies: Racing</Person>
        // bind method is more efficient
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
      </div>
    );
    /* return React.createElement('div', {className: 'App'},
     *                            React.createElement('h1', null, 'Hello from createElement')); */
  }
}

export default App;
