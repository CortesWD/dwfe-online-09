/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Styles
 */
import './Check.scss';

function Check({
  checked,
  onClick
}) {

  return (
    <button
      className="check"
      type="button"
      onClick={onClick}
    >
      <i className={`far fa-${checked ? 'check-circle' : 'circle' }`} />
    </button>
  )
}

export default Check;