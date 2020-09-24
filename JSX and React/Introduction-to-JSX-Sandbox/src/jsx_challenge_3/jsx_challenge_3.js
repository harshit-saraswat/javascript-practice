import React from "react";
import ReactDom from "react-dom";

const fName = "Harshit";
const lName = "Saraswat";
ReactDom.render(
  <div>
    <p>Created By: {`${fName} ${lName}`}!</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
