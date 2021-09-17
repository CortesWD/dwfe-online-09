/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

/**
* Others
*/
import { URLS } from '../../../../utils/constants';

function Course({ name, image }) {
  return (
    <div>
      <div className="curso-info">
        <h1>Curso de {name.toUpperCase()}</h1>
        <img height="100px" src={image} alt={name} />
      </div>
      <Link to={URLS.courses}>
        <h4>volver</h4>
      </Link>
    </div>
  )
}

export default Course;