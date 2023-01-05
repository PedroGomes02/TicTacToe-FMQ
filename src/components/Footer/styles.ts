import styled from "styled-components";

const StyledFooter = styled.a`
  position: absolute;
  bottom: 0.25rem;
  left: 0.25rem;
  background-color: transparent;
  border: none;
  font-size: 0.6rem;
  color: ${(props) => props.theme.primaryTextColor};
  text-decoration: none;

  cursor: pointer;
`;

export { StyledFooter };
