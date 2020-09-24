import React from "react";
import ReactDom from "react-dom";

var date = new Date();
var currentTime = date.getHours();

var h1Content = "Good Morning";

var customStyle = {
  color: "red"
};

if (currentTime > 0 && currentTime <= 12) {
  h1Content = "Good Morning";
  customStyle.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  h1Content = "Good Afternoon";
  customStyle.color = "green";
} else {
  h1Content = "Good Evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading2" style={customStyle}>
      {h1Content}
    </h1>
  </div>,
  document.getElementById("root")
);
