import React, { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChooseIcon from "./components/ChooseIcon";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import GameStatus from "./components/GameStatus";
import ControlBoard from "./components/ControlBoard";
import { checkWinner } from "./utils";

function App() {
  const [playerIcon, setPlayerIcon] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameBoardState, setGameBoardState] = useState(Array(9).fill(null));
  const [scoreBoardState, setScoreBoardState] = useState([0, 0]);
  const [winnerState, setWinnerState] =
    useState<SetStateAction<null | string>>(null);

  const cPUTurn = () => {
    console.log(winnerState);

    if (!playerTurn) {
      setTimeout(() => {
        const currentBoardState = [...gameBoardState];
        const emptyCells: number[] = [];
        for (let i = 0; i < currentBoardState.length; i++) {
          if (!currentBoardState[i]) {
            emptyCells.push(i);
          }
        }
        currentBoardState[
          emptyCells[Math.floor(Math.random() * emptyCells.length)]
        ] = playerIcon === "X" ? "O" : "X";
        setGameBoardState(currentBoardState);
        setPlayerTurn(true);
        if (checkWinner(currentBoardState)) {
          setWinnerState(checkWinner(currentBoardState));
        }
      }, 2000);
    }
    //checking winning victory
  };

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
            setScoreBoardState={setScoreBoardState}
            setWinnerState={setWinnerState}
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
          />
        </>
      )}
    </div>
  );
}

export default App;
