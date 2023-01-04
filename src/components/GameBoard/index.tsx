import CellBoard from "../CellBoard";
import { checkIsLastTurn, checkTie, checkWinner } from "../../utils";
import { gameBoardProps } from "../../types";
import { GameBoardContainer } from "./styles";

const GameBoard = (props: gameBoardProps) => {
  const handlerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const { value } = target as HTMLButtonElement;

    if (
      !props.playerTurn ||
      target.innerText ||
      props.winnerState ||
      props.tieState
    ) {
      return;
    }
    const currentBoard = [...props.gameBoardState];
    currentBoard[Number(value)] = props.playerIcon;

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
      props.setScoreBoardState
    );
  };

  return (
    <GameBoardContainer>
      {props.gameBoardState.map((element: null | string, index: number) => (
        <CellBoard
          key={index}
          handlerClick={handlerClick}
          value={index}
          cellSymbol={element}
          isWinnerCell={props.winningLineState?.includes(index)}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
