import React, { useState } from "react";
import "./App.css";
import CComponent from "./CComponent";
import FComponent from "./FComponent";

function App() {
  const [flag, setFlag] = useState(true); //boolean

  function changeFlag() {
    setFlag(!flag);
  }

  return (
    <div>
      <button onClick={changeFlag}>Toggle Class Component</button>
      <hr />
      {flag ? <FComponent /> : ""}
    </div>
  );
}

export default App;
