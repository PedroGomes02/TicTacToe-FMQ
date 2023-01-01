import { Dispatch, SetStateAction } from "react";

interface cellBoardProps {
  value: number | string;
  handlerClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  cellStatus: null | string;
  winnerCell: undefined|boolean;
}

interface chooseIconProps {
  setPlayerIcon: Dispatch<SetStateAction<null | string>>;
}

interface gameBoardProps {
  playerIcon: string;
  gameBoardState: string[];
  setGameBoardState: Dispatch<SetStateAction<string[]>>;
  playerTurn: boolean;
  setPlayerTurn: Dispatch<SetStateAction<boolean>>;
  scoreBoardState: number[];
  setScoreBoardState: Dispatch<SetStateAction<number[]>>;
  winnerState: null | undefined | string;
  setWinnerState: Dispatch<SetStateAction<null | undefined | string>>;
  tieState: boolean;
  setTieState: Dispatch<SetStateAction<boolean>>;
  winningLineState: undefined|number[];
  setWinningLineState: Dispatch<SetStateAction<undefined|number[]>>;
}

interface gameStatusProps {
  playerIcon: string;
  playerTurn: boolean;
  setGameBoardState: Dispatch<SetStateAction<string[]>>;
  setPlayerTurn: Dispatch<SetStateAction<boolean>>;
  winnerState: null | undefined | string;
  setWinnerState: Dispatch<SetStateAction<null | undefined | string>>;
  tieState: boolean;
  setTieState: Dispatch<SetStateAction<boolean>>;
  setWinningLineState: Dispatch<SetStateAction<undefined|number[]>>;
}

interface scoreBoardProps {
  playerIcon: string;
  playerTurn: boolean;
  scoreBoardState: number[];
  winnerState: null | undefined | string;
  setPlayerIcon: Dispatch<SetStateAction<null | string>>;
  setGameBoardState: Dispatch<SetStateAction<string[]>>;
  setPlayerTurn: Dispatch<SetStateAction<boolean>>;
  setScoreBoardState: Dispatch<SetStateAction<number[]>>;
  setWinnerState: Dispatch<SetStateAction<null | undefined | string>>;
  tieState: boolean;
  setTieState: Dispatch<SetStateAction<boolean>>;
  setWinningLineState: Dispatch<SetStateAction<undefined|number[]>>;
}

interface checkWinnerType {
  (gameBoardState: string[]): {
    winnerSymbol: string | undefined;
    winnerLine: number[];
  } | null;
}

interface checkTieType {
  (gameBoardState: string[]): boolean | undefined;
}

export type {
  chooseIconProps,
  cellBoardProps,
  gameBoardProps,
  gameStatusProps,
  scoreBoardProps,
  checkWinnerType,
  checkTieType,
};
