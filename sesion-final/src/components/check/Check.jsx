/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Styles
 */
import './Check.scss';

function Check({
  checked
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      className="check"
      type="button"
      onClick={e => setIsChecked(!isChecked)}
    >
      <i className={`far fa-${checked ? 'check-circle' : 'circle' }`} />
    </button>
  )
}

export default Check;