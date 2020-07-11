import React from "react";
import { useHover } from "./hooks/useHover";

const App = () => {
  const onHover = () => console.log("hovered");
  const title = useHover(onHover);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;
