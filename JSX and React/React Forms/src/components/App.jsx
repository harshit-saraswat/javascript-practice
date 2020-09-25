import React from "react";

function App() {
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [name, setName] = React.useState("");
  const [heading, setHeading] = React.useState("Hello!");
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleOnClick(event) {
    setHeading("Hello, " + name + "!");
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <form onSubmit={handleOnClick}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
