import styled from "styled-components";
import { scoreBoardProps } from "../../types";

const ScoreBoardContainer = styled.div`
  width: 90%;
  display: Flex;
  flex-direction: column;
  align-items: center;
  border: 0.25rem solid #3d5467;
  margin: 1rem;
  background-color: #23967f;

  @media (max-height: 460px) {
    width:30%;
    align-self:center;
  }
`;

const ScoreBoardHeader = styled.h2`
  padding-top: 0.5rem;
  margin-bottom: 0;
  color: #e8eef2;
  text-shadow: 0.1rem 0.1rem 0.1rem #3f3f3f80;
`;

const ScoresContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 0;
  @media (max-height: 460px) {
    flex-wrap:wrap;
  }
`;

const StyledScoreContainer = styled.div`
  width: 50%;
  background-color: #3f3f3f;
  color: #e8eef2;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border: 0.25rem solid white;
  box-shadow:0rem 0rem 0.5rem 0.1rem #3f3f3f80;

  @media (max-height: 460px) {
    width:80%;
  }

  .scoreNumber {
    font-size: 2rem;
    border: 1px solid #e8eef2;
    width: 3rem;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  width: 80%;
  font-size: 1rem;
  border: 0.25rem solid #3d5467;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #ce7b91;
  
  font-weight: bold;
  color: white;
  box-shadow:0rem 0rem 0.5rem 0.1rem #3f3f3f80;

  :hover{
    opacity:0.95;
    box-shadow: 0rem 0rem 0.5rem 0.25rem white;
  }

  :active{
    transform: scale(0.95,0.95);
    transition: transform 0.1s ease;
  }

`;

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
        onClick={() => {if (props.playerTurn || props.winnerState || props.tieState){
          props.setGameBoardState(Array(9).fill(null));
          props.setPlayerTurn(true);
          props.setPlayerIcon(null);
          props.setScoreBoardState([0, 0]);
          props.setWinnerState(null);
          props.setTieState(false);
          props.setWinningLineState([]);
        }}}
      >
        Reset Score Board
      </StyledButton>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
