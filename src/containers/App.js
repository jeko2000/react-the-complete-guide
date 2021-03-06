import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'a10', name: 'Max', age: '28' },
        { id: 'a11', name: 'Manu', age: 29 },
        { id: 'a12', name: 'Stephanie', age: 26 },
        { id: 'a13', name: 'Agatha', age: 4 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  /* componentWillMount() {
   *   console.log('[App.js] componentWillMount');
   * } */

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // When we depend on old state, we should set state as follows
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}
export default withClass(App, classes.App);
