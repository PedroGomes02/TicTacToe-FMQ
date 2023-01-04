import styled from "styled-components";

const GameContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-height: 480px), (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const GameControlsContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-height: 480px), (min-width: 769px) {
    width: 40%;
    height: 100%;
  }

`;

export { GameContainer, GameControlsContainer };
