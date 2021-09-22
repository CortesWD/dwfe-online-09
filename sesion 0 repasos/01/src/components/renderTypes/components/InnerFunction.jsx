import React from "react";

function Inner() {
  const childCard = () => <hr />;

  return (
    <div>
      Lo que viene acà se renderiza de otra función: 
      {childCard()}
    </div>
  );
}

export default Inner;
