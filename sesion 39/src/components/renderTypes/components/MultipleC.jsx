import React from "react";

/**
 * @description rendering based on an object key
 */
function MultipleC({ type = "3" }) {
  const renderType = {
    "1": <div>object 1</div>,
    "2": <div>object 2</div>,
    "3": <div>object 3</div>
  };
  return renderType[type];
}

export default MultipleC;
