import React, { useState, useEffect } from "react";
import { useTitle } from "./hooks/useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 3000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
