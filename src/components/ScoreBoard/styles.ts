import styled from "styled-components";

const ScoreBoardContainer = styled.div`
  width: 90%;
  display: Flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryColor};
  border: 0.2rem solid ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
`;

const ScoreBoardHeader = styled.h2`
  padding-top: 0.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryTextColor};
  text-shadow: 0.1rem 0.1rem 0.25rem ${(props) => props.theme.primaryTextColor};
`;

const ScoresContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  font-weight: bold;

  @media (orientation: landscape) {
    flex-direction: column;
  }
`;

const IndividualScoreContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.shadowColor};
  padding: 0.2rem;
  border: 0.2rem solid ${(props) => props.theme.backgroundColor};
  box-shadow: 0rem 0rem 0.5rem 0.1rem ${(props) => props.theme.shadowColor};
  border-radius: 10px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryTextColor};

  @media (orientation: landscape) {
    width: 95%;
  }

  .scoreNumber {
    width: 40%;
    background-color: ${(props) => props.theme.primaryTextColor};
    border: 2.5px solid ${(props) => props.theme.secondaryTextColor};
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  width: 90%;
  background-color: ${(props) => props.theme.highlightColor};
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  border: 0.2rem solid ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: 0rem 0rem 0.5rem 0.025rem ${(props) => props.theme.shadowColor};
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryTextColor};

  cursor: pointer;

  :hover {
    opacity: 0.9;
    box-shadow: 0rem 0rem 0.5rem 0.2rem ${(props) => props.theme.shadowColor};
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
  IndividualScoreContainer,
  StyledButton,
};
