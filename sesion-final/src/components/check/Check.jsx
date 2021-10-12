/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Styles
 */
import './Check.scss';

function Check() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      className="check"
      type="button"
      onClick={e => setIsChecked(!isChecked)}
    >
      <i className={`far fa-${isChecked ? 'check-circle' : 'circle' }`} />
    </button>
  )
}

export default Check;