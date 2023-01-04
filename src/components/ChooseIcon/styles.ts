import styled from "styled-components";

const ChooseIconContainer = styled.div`
  position: absolute;
  top: 33%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #23967f;
  padding: 2rem;
  border: 0.2rem solid #3d5467;
  border-radius: 10px;
`;

const StyledH2 = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #e8eef2;
`;

const StyledButton = styled.button`
  width: 33%;
  padding: 1rem;
  font-size: 2rem;
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
