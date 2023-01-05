import styled from "styled-components";

const ChooseIconContainer = styled.div`
  width: 80%;
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 2rem;
  border: 0.2rem solid ${(props) => props.theme.secondaryColor};
  border-radius: 10px;

  @media (min-width: 1201px) {
    width: 960px;
  }
`;

const StyledHeading = styled.h2`
  width: 100%;
  font-size: 3.5vmax;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.secondaryTextColor};
  text-shadow: 0.1rem 0.1rem 0.25rem ${(props) => props.theme.primaryTextColor};
`;

const StyledButton = styled.button`
  width: 40%;
  padding: 1rem;
  font-size: 6vmax;
  font-weight: bold;
  border: 0.2rem solid ${(props) => props.theme.shadowColor};
  box-shadow: 0rem 0rem 0.5rem 0.025rem ${(props) => props.theme.shadowColor};
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.highlightColor};
    box-shadow: 0rem 0rem 0.5rem 0.2rem ${(props) => props.theme.shadowColor};
  }
  :active {
    transform: scale(0.95, 0.95);
    transition: transform 0.1s ease;
  }
`;

export { ChooseIconContainer, StyledHeading, StyledButton };
