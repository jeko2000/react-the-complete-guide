import React from 'react';

import './Person.css';

const person = (props) => {
  /* I want the X below to be a random number  */
  return (
    <div className="Person">
      <p>I'm a {props.name} and I am {props.age} years old!</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
