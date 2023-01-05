import { useEffect, useState } from "react";
import Header from "./components/Header";
import ChooseIcon from "./components/ChooseIcon";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import ScoreBoard from "./components/ScoreBoard";
import { AppContainer, GameContainer, GameControlsContainer } from "./styles";
import {
  checkIsLastTurn,
  checkTie,
  checkWinner,
  createArrayOfEmptyIndexs,
} from "./utils";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    localStorage.getItem("isDarkTheme") === "true" ? true : false
  );
  const [playerIcon, setPlayerIcon] = useState<null | string>(null);
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameBoardState, setGameBoardState] = useState<string[]>(
    Array(9).fill(null)
  );
  const [winnerState, setWinnerState] = useState<null | undefined | string>(
    null
  );
  const [winningLineState, setWinningLineState] = useState<
    undefined | number[]
  >([]);
  const [tieState, setTieState] = useState<boolean>(false);
  const [scoreBoardState, setScoreBoardState] = useState<number[]>([0, 0]);

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
          setWinningLineState,
          checkTie,
          setTieState,
          scoreBoardState,
          setScoreBoardState
        );
      }, 1000);
    }
  }, [
    playerIcon,
    playerTurn,
    gameBoardState,
    tieState,
    winnerState,
    scoreBoardState,
  ]);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
      <AppContainer>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        {!playerIcon ? (
          <ChooseIcon setPlayerIcon={setPlayerIcon} />
        ) : (
          <>
            <GameContainer>
              <GameBoard
                playerIcon={playerIcon}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                gameBoardState={gameBoardState}
                setGameBoardState={setGameBoardState}
                winnerState={winnerState}
                setWinnerState={setWinnerState}
                winningLineState={winningLineState}
                setWinningLineState={setWinningLineState}
                tieState={tieState}
                setTieState={setTieState}
                scoreBoardState={scoreBoardState}
                setScoreBoardState={setScoreBoardState}
              />
              <GameControlsContainer>
                <GameStatus
                  playerIcon={playerIcon}
                  playerTurn={playerTurn}
                  setPlayerTurn={setPlayerTurn}
                  setGameBoardState={setGameBoardState}
                  winnerState={winnerState}
                  setWinnerState={setWinnerState}
                  setWinningLineState={setWinningLineState}
                  tieState={tieState}
                  setTieState={setTieState}
                />
                <ScoreBoard
                  playerIcon={playerIcon}
                  setPlayerIcon={setPlayerIcon}
                  playerTurn={playerTurn}
                  setPlayerTurn={setPlayerTurn}
                  setScoreBoardState={setScoreBoardState}
                  winnerState={winnerState}
                  setWinnerState={setWinnerState}
                  setWinningLineState={setWinningLineState}
                  tieState={tieState}
                  setTieState={setTieState}
                  scoreBoardState={scoreBoardState}
                  setGameBoardState={setGameBoardState}
                />
              </GameControlsContainer>
            </GameContainer>
          </>
        )}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
