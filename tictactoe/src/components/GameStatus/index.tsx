import React from "react";
import "./styles.css";

const GameStatus = (props: any) => {
  let statusMessage = "";

  if (props.playerTurn) {
    statusMessage = `Player (${props.playerIcon}) Turn`;
  } else {
    statusMessage = `CPU (${props.playerIcon === "X" ? "O" : "X"}) Turn`;
  }

  return (
    <>
      <p>{statusMessage}</p>
    </>
  );
};

export default GameStatus;
