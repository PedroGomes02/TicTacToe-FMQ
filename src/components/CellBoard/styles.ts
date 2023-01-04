import styled from "styled-components";

const StyledCellBoard = styled.button`
  background-color: #e8eef2;
  border: none;
  font-size: calc(2rem + 4vmax);
  font-weight: bold;
  aspect-ratio: 1 / 1;

  :hover {
    background: radial-gradient(
      circle,
      rgba(206, 123, 145, 1) 0%,
      rgba(232, 238, 242, 1) 50%
    );
  }
`;

export { StyledCellBoard };
