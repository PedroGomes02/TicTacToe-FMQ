import styled from "styled-components";

const ScoreBoardContainer = styled.div`
  width: 90%;
  display: Flex;
  flex-direction: column;
  align-items: center;
  border: 0.2rem solid #3d5467;
  background-color: #23967f;
  justify-content: center;
  border-radius: 10px;
`;

const ScoreBoardHeader = styled.h2`
  padding-top: 0.2rem;
  color: #e8eef2;
  text-shadow: 0.1rem 0.1rem 0.1rem #3f3f3f80;
`;

const ScoresContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  gap: 0.4rem;
  padding: 0.4rem;
  font-weight: bold;
  @media (min-width: 769px) {
    flex-wrap: wrap;
  }
`;

const StyledScoreContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f3f3f;
  color: #e8eef2;
  font-size: 1.2rem;
  padding: 0.2rem;
  border: 0.2rem solid white;
  box-shadow: 0rem 0rem 0.5rem 0.1rem #3f3f3f80;
  border-radius: 10px;

  @media (min-width: 769px) {
    width: 90%;
  }

  .scoreNumber {
    width: 40%;
    font-size: 2rem;
    font-weight: bold;
    border: 2.5px solid #e8eef2;
    text-align: center;
    background-color: black;
  }
`;

const StyledButton = styled.button`
  width: 90%;
  font-size: 1.2rem;
  border: 0.2rem solid #3d5467;
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  background-color: #ce7b91;
  border-radius: 10px;

  font-weight: bold;
  color: white;
  box-shadow: 0rem 0rem 0.5rem 0.1rem #3f3f3f80;

  :hover {
    opacity: 0.95;
    box-shadow: 0rem 0rem 0.5rem 0.25rem white;
  }

  :active {
    transform: scale(0.95, 0.95);
    transition: transform 0.1s ease;
  }
`;

export {
  ScoreBoardContainer,
  ScoreBoardHeader,
  ScoresContainer,
  StyledScoreContainer,
  StyledButton,
};
