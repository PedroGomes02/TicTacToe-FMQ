import styled from "styled-components";

const StyledHeader = styled.h1`
  padding: 1.5rem;
  width: 100%;
  text-align: center;
  background-color: #23967f;
  color: #e8eef2;
  text-shadow: 0.1rem 0.1rem 0.1rem #3f3f3f80;

  @media (max-height: 460px) {
    padding: 1rem;
  }
`;

export { StyledHeader };
