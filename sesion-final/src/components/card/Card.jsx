/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './Card.scss';

function Card({
  className = '',
  children
}) {
  return (
    <div
      className={`card ${className}`}
    >
      {children}
    </div>
  )
}

export default Card;