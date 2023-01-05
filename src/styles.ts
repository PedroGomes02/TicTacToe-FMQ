import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0.4rem solid ${(props) => props.theme.secondaryColor};
`;

const GameContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (min-width: 1201px) {
    width: 1201px;
    margin: 0 auto;
  }
`;

const GameControlsContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (orientation: landscape) {
    width: 40%;
    height: 100%;
  }
`;

export { AppContainer, GameContainer, GameControlsContainer };
