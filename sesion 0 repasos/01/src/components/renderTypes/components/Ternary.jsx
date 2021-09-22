import React from "react";

/**
 * @description rendering based on ternary operator
 */
function Ternary({ condition }) {
// function Ternary(props) {
//   const { condition } = props;
  // const condition = props.condition;
  return <>{condition ? "is true" : "is false"}</>;
}

export default Ternary;
