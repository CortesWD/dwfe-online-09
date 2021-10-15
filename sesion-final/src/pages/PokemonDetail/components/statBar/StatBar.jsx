/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './StatBar.scss';

function StatBar({
  type,
  value,
  name
}) {
  return (
    <div className={`stat-container stat-container-${type}`}>
      <span className="stat-name">
        {name}
      </span>
      <div
        id={name}
        className="stat"
        style={{
          width: `${value}%`
        }}
      >
        <strong className="stat-value"> {value}</strong>
      </div>
    </div>
  )
}

export default StatBar;