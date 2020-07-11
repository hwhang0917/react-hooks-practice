import React from "react";
import styled from "styled-components";
import { useFullScreen } from "./hooks/useFullScreen";

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  top: 10%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  right: 50%;
  z-index: 10;
`;

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are not full");
  };
  const { element, triggerFullScreen, exitFullScreen } = useFullScreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <StyledImg
          src="https://www.etoland.co.kr/data/daumeditor10/200403/97259415858501813.gif"
          alt="IU samdasu"
        />
        <ButtonContainer>
          <button onClick={triggerFullScreen}>FullScreen</button>
          <button onClick={exitFullScreen}>Exit</button>
        </ButtonContainer>
      </div>
    </div>
  );
};

export default App;
