import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fname: "",
    lname: ""
  });
  // const [lname, setLName] = React.useState("");

  function updateFName(event) {
    setFName(event.target.value);
  }

  function updateLName(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fname}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
