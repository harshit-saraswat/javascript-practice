import React from "react";
import ReactDom from "react-dom";

const fName = "Harshit";
const lName = "Saraswat";
ReactDom.render(
  <div>
    <h1>Hey, {`${fName} ${lName}`}!</h1>
    <p>Lucky number = {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
