import React, { Dispatch, SetStateAction } from "react";
import "./styles.css";
import CellBoard from "../CellBoard";
import { checkDraw, checkWinner } from "../../utils";

interface gameBoardProps {
  playerIcon: "X" | "O";
  gameBoardState: string[];
  setGameBoardState: Dispatch<SetStateAction<string[]>>;
  playerTurn: boolean;
  setPlayerTurn: Dispatch<SetStateAction<boolean>>;
  scoreBoardState: number[];
  setScoreBoardState: Dispatch<SetStateAction<number[]>>;
  winnerState: any;
  setWinnerState: Dispatch<SetStateAction<any>>; ////// CORRIGIR
  drawState: boolean;
  setDrawState: Dispatch<SetStateAction<boolean>>;
}

const GameBoard = (props: gameBoardProps) => {
  const handlerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!props.playerTurn || props.winnerState || props.drawState) {
      return;
    }
    const currentBoardState = [...props.gameBoardState];
    
    const {value} = event.target as HTMLButtonElement;
    currentBoardState[Number(value)] = props.playerIcon;
    props.setGameBoardState(currentBoardState);
    props.setPlayerTurn(false);
    if (checkWinner(currentBoardState)) {
      props.setWinnerState(checkWinner(currentBoardState));
      const currentScoreBoard = [...props.scoreBoardState];
      if (checkWinner(currentBoardState) === props.playerIcon) {
        currentScoreBoard[0] += 1;
      } else currentScoreBoard[1] += 1;
      props.setScoreBoardState(currentScoreBoard);
    } else if (checkDraw(currentBoardState)) {
      props.setDrawState(true);
    }
  };

  return (
    <div className="gameBoardContainer">
      {props.gameBoardState.map((element: null | string, index: number) => (
        <CellBoard
          key={index}
          value={index}
          handlerClick={handlerClick}
          cellStatus={element}
        />
      ))}
    </div>
  );
};

export default GameBoard;
