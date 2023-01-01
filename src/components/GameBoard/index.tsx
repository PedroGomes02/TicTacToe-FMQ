import CellBoard from "../CellBoard";
import { checkIsLastTurn, checkTie, checkWinner } from "../../utils";
import { gameBoardProps } from "../../types";
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
    align-self:center;
  }
`;

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
      checkTie,
      props.setTieState,
      props.scoreBoardState,
      props.setScoreBoardState,
      props.setWinningLineState
    );
  };

  return (
    <GameBoardContainer>
      {props.gameBoardState.map((element: null | string, index: number) => (
        <CellBoard
          key={index}
          value={index}
          handlerClick={handlerClick}
          cellStatus={element}
          winnerCell={props.winningLineState?.includes(index)}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
