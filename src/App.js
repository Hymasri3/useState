import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(""); //string
  const [flag, setFlag] = useState(false); //boolean
  const [steps, setSteps] = useState(() => {
    console.log("clicked");
    return 0;
  }); //number  for heavy operation you can do this method useState called only once
  const [names, setNames] = useState([]); //object

  function changeName() {
    setFlag(!flag);
  }
  const increment = () => {
    //useState called only once for no.of clicks
    setSteps(steps + 1);
  };

  function decrement() {
    setSteps(steps - 1);
  }
  function addNames(e) {
    // const addNames=(event)=>{}
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
    console.log(names);
  }

  return (
    <div>
      <h1>Hello, {flag && name}</h1>
      <button onClick={changeName}>click</button>
      <hr />
      <button onClick={increment}>+</button>
      <p>{steps}</p>
      <button onClick={decrement}>-</button>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="Enter the Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {names.map((each) => (
          <li>{each.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
