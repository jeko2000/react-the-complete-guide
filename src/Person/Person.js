import React from 'react';

const person = () => {
  /* I want the X below to be a random number  */
  return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;
