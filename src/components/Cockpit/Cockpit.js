import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  const length = props.persons.length;

  if (length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        alt={props.showPersons ? 'true': undefined}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  );
}
/* One core difference between the class based and function
 * components is the fact that function components are unable
 * to access lifecycle hooks while class based components can.
 */
export default cockpit;
