import { scoreBoardProps } from "../../types";
import {
  ScoreBoardContainer,
  ScoreBoardHeader,
  ScoresContainer,
  StyledScoreContainer,
  StyledButton,
} from "./styles";

const ScoreBoard = (props: scoreBoardProps) => {
  const playerScore = props.scoreBoardState[0];
  const cPUScore = props.scoreBoardState[1];
  return (
    <ScoreBoardContainer>
      <ScoreBoardHeader>Score Board</ScoreBoardHeader>
      <ScoresContainer>
        <StyledScoreContainer>
          <span>{`Player`}</span>
          <span className="scoreNumber">{playerScore}</span>
        </StyledScoreContainer>
        <StyledScoreContainer>
          <span>{`CPU`}</span>
          <span className="scoreNumber">{cPUScore}</span>
        </StyledScoreContainer>
      </ScoresContainer>
      <StyledButton
        onClick={() => {
          if (props.playerTurn || props.winnerState || props.tieState) {
            props.setPlayerIcon(null);
            props.setPlayerTurn(true);
            props.setGameBoardState(Array(9).fill(null));
            props.setWinnerState(null);
            props.setWinningLineState([]);
            props.setTieState(false);
            props.setScoreBoardState([0, 0]);
          }
        }}
      >
        Reset Score Board
      </StyledButton>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
