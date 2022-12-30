import React from "react";
import "./styles.css";

const ControlBoard = (props: any) => {
  return (
    <>
      <button
        onClick={() => {
          props.setGameBoardState(Array(9).fill(null));
          props.setPlayerTurn(true);
        }}
      >
        New Game
      </button>
      <button onClick={() => {
          props.setGameBoardState(Array(9).fill(null));
          props.setPlayerTurn(true);
          props.setPlayerIcon(null);
          props.setScoreBoardState([0,0])
        }}>Reset Game</button>
    </>
  );
};

export default ControlBoard;
