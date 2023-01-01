import styled from "styled-components";

const GameBoardContainer = styled.div`
  width: 70%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-height: 460px) {
    width: 30%;
    align-self: center;
  }
`;

export { GameBoardContainer };
