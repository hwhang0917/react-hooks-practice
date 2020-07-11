import React from "react";
import { useTabs } from "./hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the tab Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the tab Section 2",
  },
  {
    tab: "Section 3",
    content: "I'm the content of the tab Section 3",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
