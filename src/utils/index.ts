import { Dispatch, SetStateAction } from "react";
import { checkTieType, checkWinnerType } from "../types";

const checkWinner = (gameBoardState: string[]) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (
      gameBoardState[a] &&
      gameBoardState[a] === gameBoardState[b] &&
      gameBoardState[a] === gameBoardState[c]
    ) {
      return { winnerSymbol: gameBoardState[a], winnerLine: winningLines[i] };
    }
  }
  return null;
};

const createArrayOfEmptyIndexs = (array: any[]) => {
  const arrayOfEmptyIndexs: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      arrayOfEmptyIndexs.push(i);
    }
  }
  return arrayOfEmptyIndexs;
};

const checkTie = (gameBoardState: string[]) => {
  if (createArrayOfEmptyIndexs(gameBoardState).length === 0) {
    return true;
  }
};

const checkIsLastTurn = (
  currentBoard: string[],
  playerIcon: null|string,
  checkWinner: checkWinnerType,
  setWinner: Dispatch<SetStateAction<null | undefined | string>>,
  checkTie: checkTieType,
  setTie: Dispatch<SetStateAction<boolean>>,
  scoreBoard: number[],
  setScore: Dispatch<SetStateAction<number[]>>,
  setWinningLineState: Dispatch<SetStateAction<undefined|number[]>>,
) => {
  if (checkWinner(currentBoard)) {
    setWinner((checkWinner(currentBoard))?.winnerSymbol);
    setWinningLineState((checkWinner(currentBoard))?.winnerLine);
    const currentScore = [...scoreBoard];
    if (checkWinner(currentBoard)?.winnerSymbol === playerIcon) {
      currentScore[0] += 1;
    } else currentScore[1] += 1;
    setScore(currentScore);
  } else if (checkTie(currentBoard)) {
    setTie(true);
  }
};

export { checkWinner, createArrayOfEmptyIndexs, checkTie, checkIsLastTurn };
