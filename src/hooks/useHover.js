import { useRef, useEffect } from "react";

const useHover = (onHover) => {
  const element = useRef(null);
  useEffect(() => {
    const hoveredElement = element.current;
    hoveredElement.addEventListener("mouseenter", onHover);
    return function cleanup() {
      hoveredElement.removeEventListener("mouseenter", onHover);
    };
  });
  return element;
};

export default useHover;
