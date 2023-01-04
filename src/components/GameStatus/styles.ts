import styled from "styled-components";

const GameStatusContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  color: #3d5467;
  font-size: 1.2rem;
  font-weight: bold;
  border: 0.2rem solid #3d5467;
  border-radius: 10px;

  @media (min-width: 769px) {
    flex-wrap: wrap;
  }

  @media (max-height: 480px) {
    padding: 0.2rem;
  }
`;

const StyledButton = styled.button`
  width: 40%;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border: 0.2rem solid #3d5467;
  margin: 0.2rem 0.4rem;
  padding: 0.2rem;
  border-radius: 10px;
  
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
