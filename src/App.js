import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '10', name: 'Max', age: 28 },
      { id: '11', name: 'Manu', age: 29 },
      { id: '12', name: 'Stephanie', age: 26 },
      { id: '13', name: 'Agatha', age: 4}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    // slice() without arguments makes a copy
    // const persons = this.state.persons.slice();
    // Alternatively, we can spread:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherti',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                     click={() => this.deletePersonHandler(index)}
                     name={person.name}
                     age={person.age}
            key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    /* return React.createElement('div', {className: 'App'},
     *                            React.createElement('h1', null, 'Hello from createElement')); */
  }
}

export default App;
