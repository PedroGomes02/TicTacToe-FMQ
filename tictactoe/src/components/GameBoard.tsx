import React from "react";
import "./GameBoard.css"
import CellBoard from "./CellBoard";

const GameBoard = (props: any) => {

  const handlerClick = (event:any) => {
    event.preventDefault()
    const currentBoardState = [...props.gameBoardState]
    currentBoardState[event.target.value] = "X" //Substituir simbolo escolhido inicio(state)
    props.setGameBoardState(currentBoardState)}
  
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
