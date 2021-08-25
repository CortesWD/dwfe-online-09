import React from "react";

/**
 * @description rendering based on ternary operator
 */
function Ternary({ condition }) {
  return <>{condition ? "is true" : "is false"}</>;
}

export default Ternary;
