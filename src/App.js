import React from "react";
import { useBeforeLeave } from "./hooks/useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("PLZ DON'T LEAVE!");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
