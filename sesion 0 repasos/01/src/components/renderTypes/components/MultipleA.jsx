import React from "react";

/**
 * @description rendering based on an if/else flow
 */
function MultipleA({ type }) {
  if (type === "1") {
    return <div>tipo 1</div>;
  } else if (type === "2") {
    return <div>tipo 2</div>;
  } else if (type === "3") {
    return <div>tipo 3</div>;
  }
  return <div>no hay un type definido</div>;
}

export default MultipleA;
