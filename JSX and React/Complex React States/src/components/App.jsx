import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fname: "",
    lname: ""
  });

  function updateName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname
        };
      } else {
        return {
          fname: prevValue.fname,
          lname: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateName}
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          name="lName"
          onChange={updateName}
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
