import styled from "styled-components";

const StyledCellBoard = styled.button<{ isWinnerCell: undefined | boolean }>`
  aspect-ratio: 1 / 1;

  background: ${(props) =>
    props.isWinnerCell
      ? `radial-gradient(circle, ${props.theme.highlightColor} 0%, ${props.theme.backgroundColor} 66%)`
      : props.theme.backgroundColor};

  color: ${(props) =>
    props.isWinnerCell
      ? props.theme.secondaryTextColor
      : props.theme.primaryTextColor};

  border: none;
  font-size: calc(2rem + 4vmax);
  font-weight: bold;

  cursor: pointer;

  :hover {
    background: radial-gradient(
      circle,
      ${(props) => props.theme.highlightColor} 0%,
      ${(props) => props.theme.backgroundColor} 50%
    );
  }
`;

export { StyledCellBoard };
