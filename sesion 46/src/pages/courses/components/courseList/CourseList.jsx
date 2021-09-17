/**
 * Dependencies
 */
 import React from "react";
 import { Link } from 'react-router-dom';
import { CURSOS, URLS } from '../../../../utils/constants';


function CourseList() {
  return (
    <div>
      <h2>Cursos</h2>
      <ul className="curso">
        {CURSOS.map(({id, name, pathName}) => (
          <li key={id}>
            <Link to={`${URLS.courses}${pathName}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList;