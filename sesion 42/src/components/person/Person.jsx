/**
 * Dependencies
 */
import React from "react";

/**
 * Dependencies
 */
import './Person.css';

function Person({ nombre, company, catchPhrase, website, email, city }) {
  return (
    <div className="persona">
      <p>{nombre}</p>
      <p>I work at: {company}</p>
      <p>I say: {catchPhrase}</p>
      <p>{website}</p>
      <p>My email is: <a href={`mailto:${email}`}>{email}</a></p>
      <p>{city}</p>
    </div>
  );
}

export default Person;
