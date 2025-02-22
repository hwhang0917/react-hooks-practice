import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.title = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
