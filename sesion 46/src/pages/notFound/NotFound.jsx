/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

/**
 * Dependencies
 */
import { URLS } from './../../utils/constants';

function NotFound() {
  return (
    <div className="flex-centered">
      <h1>Ups este contenido no existe</h1>
      <Link to={URLS.base}>Volver al home</Link>
    </div>
  );
}

export default NotFound;