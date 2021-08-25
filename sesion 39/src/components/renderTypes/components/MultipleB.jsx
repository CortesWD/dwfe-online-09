import React from "react";
import Ternary from "./Ternary";

/**
 * @description rendering based on an switch case
 */
function MultipleB({ type }) {
  let component = null;
  switch (type) {
    case "1":
      component = <Ternary condition />;
      break;
    case "2":
      component = <div>case 2</div>;
      break;
    case "3":
      component = 'abc';
      break;
    default:
      component = "tipo no encontrado";
      break;
  }

  return component;
}

export default MultipleB;
