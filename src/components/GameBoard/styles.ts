import styled from "styled-components";

const GameBoardContainer = styled.div`
  width: 60%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  @media (max-height: 480px) {
    width: 35%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;



export { GameBoardContainer };
