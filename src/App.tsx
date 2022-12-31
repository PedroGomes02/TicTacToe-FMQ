import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChooseIcon from "./components/ChooseIcon";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import GameStatus from "./components/GameStatus";
import ControlBoard from "./components/ControlBoard";
import { checkDraw, checkWinner, createArrayOfEmptyIndexs } from "./utils";

function App() {
  const [playerIcon, setPlayerIcon] = useState<null | "X" | "O">(null);
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameBoardState, setGameBoardState] = useState<string[]>(
    Array(9).fill(null)
  );
  const [scoreBoardState, setScoreBoardState] = useState<number[]>([0, 0]);
  const [winnerState, setWinnerState] = useState<null | string>(null);
  const [drawState, setDrawState] = useState<boolean>(false);

  const cPUTurn = () => {
    if (playerTurn || winnerState || drawState) {
      return;
    }
    setTimeout(() => {
      const currentBoardState = [...gameBoardState];
      const emptyCells = createArrayOfEmptyIndexs(currentBoardState);
      currentBoardState[
        emptyCells[Math.floor(Math.random() * emptyCells.length)]
      ] = playerIcon === "X" ? "O" : "X";
      setGameBoardState(currentBoardState);
      setPlayerTurn(true);
      if (checkWinner(currentBoardState)) {
        setWinnerState(checkWinner(currentBoardState));
        const currentScoreBoard = [...scoreBoardState];
        if (checkWinner(currentBoardState) === playerIcon) {
          currentScoreBoard[0] += 1;
        } else currentScoreBoard[1] += 1;
        setScoreBoardState(currentScoreBoard);
      } else if (checkDraw(currentBoardState)) {
        setDrawState(true);
      }
    }, 1000);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(cPUTurn, [playerTurn]);

  return (
    <div className="App">
      <Header />
      {!playerIcon ? (
        <ChooseIcon setPlayerIcon={setPlayerIcon} />
      ) : (
        <>
          <GameBoard
            playerIcon={playerIcon}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            gameBoardState={gameBoardState}
            setGameBoardState={setGameBoardState}
            scoreBoardState={scoreBoardState}
            setScoreBoardState={setScoreBoardState}
            winnerState={winnerState}
            setWinnerState={setWinnerState}
            drawState={drawState}
            setDrawState={setDrawState}
          />
          <GameStatus playerIcon={playerIcon} playerTurn={playerTurn} />
          <ScoreBoard
            scoreBoardState={scoreBoardState}
            playerIcon={playerIcon}
          />
          <ControlBoard
            setGameBoardState={setGameBoardState}
            setPlayerTurn={setPlayerTurn}
            setPlayerIcon={setPlayerIcon}
            setScoreBoardState={setScoreBoardState}
            setWinnerState={setWinnerState}
            setDrawState={setDrawState}
          />
        </>
      )}
    </div>
  );
}

export default App;
