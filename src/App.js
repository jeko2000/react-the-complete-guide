import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a10', name: 'Max', age: 28 },
      { id: 'a11', name: 'Manu', age: 29 },
      { id: 'a12', name: 'Stephanie', age: 26 },
      { id: 'a13', name: 'Agatha', age: 4}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    console.log('personIndex', personIndex);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons });
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
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                     click={() => this.deletePersonHandler(index)}
                     name={person.name}
                     age={person.age}
                     key={person.id}
                     changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }
    const assignedClasses = [];
    const length = this.state.persons.length;

    if (length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
      /*
         We wrap the entire node in StyleRoot unless we only
         need sudo-selectors from Radium
       */
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass.join(' ')}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    /* return React.createElement('div', {className: 'App'},
     *                            React.createElement('h1', null, 'Hello from createElement')); */
  }
}

export default App;
