/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './Chip.scss';

function Chip({
  color = '',
  children
}) {
  return (
    <div className={`chip ${color ? `chip-${color}` : ''}`}>
      {children}
    </div>
  )
}

export default Chip;