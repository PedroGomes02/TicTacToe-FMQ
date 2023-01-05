import styled from "styled-components";

const GameStatusContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border: 0.2rem solid ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryTextColor};
`;

const StyledButton = styled.button`
  width: 40%;
  background-color: ${(props) => props.theme.highlightColor};
  box-shadow: 0rem 0rem 0.5rem 0.025rem ${(props) => props.theme.shadowColor};
  margin: 0.2rem 0.4rem;
  padding: 0.2rem;
  border: 0.2rem solid ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryTextColor};
  text-shadow: 0.1rem 0.1rem 0.25rem ${(props) => props.theme.shadowColor};

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

export { GameStatusContainer, StyledButton };
