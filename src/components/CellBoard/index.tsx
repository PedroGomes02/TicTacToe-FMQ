import { cellBoardProps } from "../../types";
import { StyledCellBoard } from "./styles";

const CellBoard = (props: cellBoardProps) => {
  return (
    <StyledCellBoard
      onClick={props.handlerClick}
      value={props.value}
      style={
        props.isWinnerCell
          ? {
              background:
                "radial-gradient(circle, rgba(206,123,145,1) 0%, rgba(232,238,242,1) 66%)",
              color: "white",
              fontWeight: "bold",
            }
          : {}
      }
    >
      {props.cellSymbol}
    </StyledCellBoard>
  );
};

export default CellBoard;
