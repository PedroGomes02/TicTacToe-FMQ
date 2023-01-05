import styled from "styled-components";

const StyledHeader = styled.h1`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  font-size: 3.5vmax;
  color: ${(props) => props.theme.secondaryTextColor};
  text-shadow: 0.1rem 0.1rem 0.25rem ${(props) => props.theme.primaryTextColor};
`;

const ThemeButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;

  cursor: pointer;
`;

export { StyledHeader, ThemeButton };
