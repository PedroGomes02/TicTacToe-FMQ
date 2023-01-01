import styled from "styled-components";
import { cellBoardProps } from "../../types";

const StyledCellBoard = styled.button`
  width: calc(100% / 3);
  aspect-ratio: 1 / 1;
  background-color: #e8eef2;
  border: none;
  font-size: 3.5rem;

  :hover {
    background: radial-gradient(circle, white 0%, #e8eef2 66%);
  }

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    border-bottom: 0.5rem solid #3d5467;
  }
  :nth-last-child(1),
  :nth-last-child(2),
  :nth-last-child(3) {
    border-top: 0.5rem solid #3d5467;
  }
  :nth-child(1),
  :nth-child(2),
  :nth-child(4),
  :nth-child(5),
  :nth-child(7),
  :nth-child(8) {
    border-right: 0.5rem solid #3d5467;
  }
`;

const CellBoard = (props: cellBoardProps) => {
  return (
    <StyledCellBoard
      onClick={props.handlerClick}
      value={props.value}
      style={
        props.winnerCell
          ? {
              background:
                "radial-gradient(circle, rgba(206,123,145,1) 0%, rgba(232,238,242,1) 66%)",
              color: "white",
              fontWeight: "bold",
            }
          : {}
      }
    >
      {props.cellStatus}
    </StyledCellBoard>
  );
};

export default CellBoard;
