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
  text = ''
}) {
  return (
    <div className={`chip ${color ? `chip-${color}` : ''}`}>
      {text}
    </div>
  )
}

export default Chip;