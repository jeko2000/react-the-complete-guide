import React from 'react';

import classes from './Person.css';

const person = (props) => {
  /* I want the X below to be a random number  */
  return (
    //    <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
