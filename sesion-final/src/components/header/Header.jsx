/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './Header.scss';

function Header(props) {
  return (
    <header>
      <button><i className="fa fa-chevron-circle-left" /></button>
      <h1> Pokedex </h1>
    </header>
  );
}

export default Header;