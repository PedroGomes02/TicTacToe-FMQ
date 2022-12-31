import React from "react";
import "./styles.css";

const ScoreBoard = (props: any) => {
  const playerScore = props.scoreBoardState[0];
  const cPUScore = props.scoreBoardState[1];
  return (
    <>
      <h2>Score Board</h2>
      <span>{`Player Score (${props.playerIcon}): ${playerScore}`}</span>;
      <span>{`CPU Score (${
        props.playerIcon === "X" ? "O" : "X"
      }): ${cPUScore}`}</span>
      ;;
    </>
  );
};

export default ScoreBoard;
