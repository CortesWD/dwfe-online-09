/**
 * Dependencies
 */
import React from "react";

/**
 * Dependencies
 */
import './Person.css';

function Person({ nombre, company, catchPhrase, website }) {
  return (
    <div className="persona">
      <p>{nombre}</p>
      <p>I work at: {company}</p>
      <p>I say: {catchPhrase}</p>
      <p>{website}</p>
    </div>
  );
}

export default Person;
