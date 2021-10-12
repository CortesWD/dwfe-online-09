/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './Button.scss';

function Button({
  type = 'button',
  className = '',
  onClick,
  children = null
}) {
  return (
    <button
      type={type}
      className={`btn ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;