/**
 * Dependencies
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Styles
 */
import './Header.scss';

function Header(props) {
  return (
    <header>
      <Link to='/'><i className="fa fa-chevron-circle-left" /></Link>
      <h1> Pokedex </h1>
    </header>
  );
}

export default Header;