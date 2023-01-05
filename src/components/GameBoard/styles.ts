import styled from "styled-components";

const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  aspect-ratio: 1/1;
  gap: 0.6rem;
  background-color: ${(props) => props.theme.secondaryColor};
  margin: 1rem;
  padding: 0;

  @media (orientation: landscape) and (min-aspect-ratio: 4/3) {
    height: 75%;
  }
  @media (orientation: landscape) and (max-aspect-ratio: 4/3) {
    height: 55%;
  }
  @media (orientation: portrait) and (min-aspect-ratio: 3/4) {
    width: 55%;
  }
  @media (orientation: portrait) and (max-aspect-ratio: 3/4) {
    width: 75%;
  }
`;

export { GameBoardContainer };
