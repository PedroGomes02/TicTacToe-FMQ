import React from "react";
import "./styles.css";
import CellBoard from "../CellBoard";
import { checkWinner } from "../../utils";

interface gameBoardProps {
  playerIcon: any; //null|"X"|"O",
  gameBoardState: string[];
  setGameBoardState: any;
  playerTurn: boolean;
  setPlayerTurn: any;
  setScoreBoardState: any;
  setWinnerState: any;
}

const GameBoard = (props: gameBoardProps) => {
  const handlerClick = (event: any) => {
    event.preventDefault();
    if (!props.playerTurn) {
      return;
    }
    const currentBoardState = [...props.gameBoardState];
    currentBoardState[event.target.value] = props.playerIcon;
    props.setGameBoardState(currentBoardState);
    props.setPlayerTurn(false);
    if (checkWinner(currentBoardState)) {
      props.setWinnerState(checkWinner(currentBoardState));
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
