import CellBoard from "../CellBoard";
import { gameBoardProps } from "../../types";
import { GameBoardContainer } from "./styles";

const GameBoard = (props: gameBoardProps) => {

  return (
    <GameBoardContainer>
      {props.gameBoardState.map((element: null | string, index: number) => (
        <CellBoard
          key={index}
          value={index}
          cellSymbol={element}
          isWinnerCell={props.winningLineState?.includes(index)}
          playerIcon={props.playerIcon}
          playerTurn={props.playerTurn}
          setPlayerTurn={props.setPlayerTurn}
          gameBoardState={props.gameBoardState}
          setGameBoardState={props.setGameBoardState}
          winnerState={props.winnerState}
          setWinnerState={props.setWinnerState}
          winningLineState={props.winningLineState}
          setWinningLineState={props.setWinningLineState}
          tieState={props.tieState}
          setTieState={props.setTieState}
          scoreBoardState={props.scoreBoardState}
          setScoreBoardState={props.setScoreBoardState}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
