import React from "react";
import ReactDom from "react-dom";
import add, { multiply, subtract, divide } from "./calculator";

ReactDom.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
