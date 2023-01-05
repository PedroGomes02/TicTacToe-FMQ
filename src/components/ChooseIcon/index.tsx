import { chooseIconProps } from "../../types";
import { ChooseIconContainer, StyledHeading, StyledButton } from "./styles";

const ChooseIcon = (props: chooseIconProps) => {
  return (
    <ChooseIconContainer>
      <StyledHeading>Please Choose your Icon</StyledHeading>
      <StyledButton onClick={() => props.setPlayerIcon("X")}>X</StyledButton>
      <StyledButton onClick={() => props.setPlayerIcon("O")}>O</StyledButton>
    </ChooseIconContainer>
  );
};

export default ChooseIcon;
