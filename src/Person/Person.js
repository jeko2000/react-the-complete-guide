import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  /* I want the X below to be a random number  */
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);
