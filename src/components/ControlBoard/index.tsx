import React from "react";
import "./styles.css";

const ControlBoard = (props: any) => {
  return (
    <>
      <button
        onClick={() => {
          props.setGameBoardState(Array(9).fill(null));
          props.setPlayerTurn(true);
          props.setWinnerState(null);
          props.setDrawState(false);
        }}
      >
        New Game
      </button>
      <button
        onClick={() => {
          props.setGameBoardState(Array(9).fill(null));
          props.setPlayerTurn(true);
          props.setPlayerIcon(null);
          props.setScoreBoardState([0, 0]);
          props.setWinnerState(null);
          props.setDrawState(false);
        }}
      >
        Reset Game
      </button>
    </>
  );
};

export default ControlBoard;
