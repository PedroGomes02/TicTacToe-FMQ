import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChooseIcon from "./components/ChooseIcon";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import ScoreBoard from "./components/ScoreBoard";
import {
  checkIsLastTurn,
  checkTie,
  checkWinner,
  createArrayOfEmptyIndexs,
} from "./utils";

function App() {
  const [playerIcon, setPlayerIcon] = useState<null | string>(null);
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameBoardState, setGameBoardState] = useState<string[]>(
    Array(9).fill(null)
  );
  const [winnerState, setWinnerState] = useState<null | undefined | string>(
    null
  );
  const [tieState, setTieState] = useState<boolean>(false);
  const [scoreBoardState, setScoreBoardState] = useState<number[]>([0, 0]);
  const [winningLineState, setWinningLineState] = useState<
    undefined | number[]
  >([]);

  useEffect(() => {
    if (!playerTurn && !winnerState && !tieState) {
      setTimeout(() => {
        const currentBoard = [...gameBoardState];
        const emptyCells = createArrayOfEmptyIndexs(currentBoard);

        currentBoard[
          emptyCells[Math.floor(Math.random() * emptyCells.length)]
        ] = playerIcon === "X" ? "O" : "X";

        setGameBoardState(currentBoard);
        setPlayerTurn(true);

        checkIsLastTurn(
          currentBoard,
          playerIcon,
          checkWinner,
          setWinnerState,
          checkTie,
          setTieState,
          scoreBoardState,
          setScoreBoardState,
          setWinningLineState
        );
      }, 1000);
    }
  }, [
    gameBoardState,
    playerIcon,
    playerTurn,
    scoreBoardState,
    tieState,
    winnerState,
  ]);

  return (
    <div className="App">
      <Header />
      {!playerIcon ? (
        <ChooseIcon setPlayerIcon={setPlayerIcon} />
      ) : (
        <>
          <GameStatus
            playerIcon={playerIcon}
            playerTurn={playerTurn}
            setGameBoardState={setGameBoardState}
            setPlayerTurn={setPlayerTurn}
            winnerState={winnerState}
            setWinnerState={setWinnerState}
            tieState={tieState}
            setTieState={setTieState}
            setWinningLineState={setWinningLineState}
          />
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
            tieState={tieState}
            setTieState={setTieState}
            winningLineState={winningLineState}
            setWinningLineState={setWinningLineState}
          />
          <ScoreBoard
            scoreBoardState={scoreBoardState}
            playerIcon={playerIcon}
            playerTurn={playerTurn}
            setGameBoardState={setGameBoardState}
            setPlayerTurn={setPlayerTurn}
            setPlayerIcon={setPlayerIcon}
            setScoreBoardState={setScoreBoardState}
            winnerState={winnerState}
            setWinnerState={setWinnerState}
            tieState={tieState}
            setTieState={setTieState}
            setWinningLineState={setWinningLineState}
          />
        </>
      )}
    </div>
  );
}

export default App;
