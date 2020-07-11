import { useRef, useEffect } from "react";

export const useClick = (onClick) => {
  const element = useRef(null);
  useEffect(() => {
    const clickElement = element.current;
    clickElement.addEventListener("click", onClick);
    return function cleanup() {
      clickElement.removeEventListener("click", onClick);
    };
  });
  return element;
};
