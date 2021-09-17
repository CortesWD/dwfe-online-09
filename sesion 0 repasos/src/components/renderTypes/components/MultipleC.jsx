import React from "react";
import Button from '../../../Button';

/**
 * @description rendering based on an object key
 */
function MultipleC({ type = '3' }) {
  
  const renderType = {
    "1": <Button />,
    "2": <div>object 2</div>,
    "3": <div>object 3</div>
  };
  return renderType[type];
}

export default MultipleC;
