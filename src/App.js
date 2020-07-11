import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("Hello World!");
  const [number, setNumber] = useState(0);
  const [Anumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <h1>Hello Numbers</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(Anumber + 1)}>{Anumber}</button>
    </div>
  );
};

export default App;
