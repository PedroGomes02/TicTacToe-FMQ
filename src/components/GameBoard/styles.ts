import styled from "styled-components";

const GameBoardContainer = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  @media (max-height: 480px), (min-width: 769px) {
    width: 60%;
    height: 90%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;

export { GameBoardContainer };
