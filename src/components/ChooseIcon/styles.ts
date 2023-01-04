import styled from "styled-components";

const ChooseIconContainer = styled.div`
  width: 80%;
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #23967f;
  padding: 2rem;
  border: 0.2rem solid #3d5467;
  border-radius: 10px;

  @media (min-width: 1201px) {
  width: 1201px;
  }
`;

const StyledH2 = styled.h2`
  width: 100%;
  font-size: 3.5vmax;
  font-weight: bold;
  text-align: center;
  color: #e8eef2;
  text-shadow: 0.1rem 0.1rem 0.1rem #3f3f3f80;
`;

const StyledButton = styled.button`
  width: 40%;
  padding: 1rem;
  font-size: 6vmax;
  font-weight: bold;
  border: 0.2rem solid #3d5467;
  box-shadow: 0rem 0rem 0.5rem 0.25rem #3f3f3f80;
  border-radius: 10px;

  :hover {
    background-color: white;
    box-shadow: 0rem 0rem 0.5rem 0.25rem white;
  }
  :active {
    transform: scale(0.95, 0.95);
    transition: transform 0.1s ease;
  }
`;

export { ChooseIconContainer, StyledButton, StyledH2 };
