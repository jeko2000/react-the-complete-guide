import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);
  // We can pass an empty array anytime we want the effect to be used only once.
  // We can have as many useEffects as needed

  useEffect(()=> {
    console.log('[Cockpit.js] 2nd useEffect()');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

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

  console.log('[Cockpit.js] rendering...');
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
