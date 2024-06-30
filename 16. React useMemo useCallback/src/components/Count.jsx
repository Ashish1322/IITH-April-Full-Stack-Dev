import React from "react";

function Count({ count, fun }) {
  console.log("Child Component Rendered");
  return <div>Count : {count}</div>;
}

export default React.memo(Count);
