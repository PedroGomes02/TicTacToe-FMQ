import styled from "styled-components";

const GameStatusContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: #3d5467;
  font-size: 1rem;
  font-weight: bold;
  border: 0.25rem solid #3d5467;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  @media (max-height: 480px) {
    padding: 0.25rem;
  }
`;

const StyledButton = styled.button`
  width: 40%;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: 0.25rem solid #3d5467;
  margin: 0.5rem 1rem;
  padding: 0.25rem;
  background-color: #ce7b91;
  box-shadow: 0rem 0rem 0.5rem 0.1rem #3f3f3f80;

  :hover {
    opacity: 0.95;
    box-shadow: 0rem 0rem 0.5rem 0.25rem #3f3f3f80;
  }

  :active {
    transform: scale(0.95, 0.95);
    transition: transform 0.1s ease;
  }

`;

export { GameStatusContainer, StyledButton};
