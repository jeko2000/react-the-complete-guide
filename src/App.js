import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
  background-color: lightgreen;
      color: black;
  }
`;
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
      /* styled.backgroundColor = 'red';
       * style[':hover'] = {
       *   backgroundColor: 'salmon',
       *   color: 'black'
       * } */
    }

    const classes = [];
    const length = this.state.persons.length;

    if (length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      /*
         We wrap the entire node in StyleRoot unless we only
         need sudo-selectors from Radium
       */
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    /* return React.createElement('div', {className: 'App'},
     *                            React.createElement('h1', null, 'Hello from createElement')); */
  }
}

export default App;
