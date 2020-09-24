import React from "react";

function Heading() {
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
  return (
    <h1 className="heading2" style={customStyle}>
      {h1Content}
    </h1>
  );
}

export default Heading;
