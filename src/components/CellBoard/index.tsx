import { cellBoardProps } from "../../types";
import { checkIsLastTurn, checkTie, checkWinner } from "../../utils";
import { StyledCellBoard } from "./styles";

const CellBoard = (props: cellBoardProps) => {
  
  const handlerClick = () => {
    if (
      !props.playerTurn ||
      props.gameBoardState[props.value] ||
      props.winnerState ||
      props.tieState
    ) {
      return;
    }
    const currentBoard = [...props.gameBoardState];
    currentBoard[props.value] = props.playerIcon;

    props.setGameBoardState(currentBoard);
    props.setPlayerTurn(false);

    checkIsLastTurn(
      currentBoard,
      props.playerIcon,
      checkWinner,
      props.setWinnerState,
      props.setWinningLineState,
      checkTie,
      props.setTieState,
      props.scoreBoardState,
      props.setScoreBoardState,
    );
  };
    
  return (
    <StyledCellBoard
      onClick={handlerClick}
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
