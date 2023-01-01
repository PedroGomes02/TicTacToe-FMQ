import { chooseIconProps } from "../../types";
import { ChooseIconContainer, StyledButton, StyledH2 } from "./styles";

const ChooseIcon = (props: chooseIconProps) => {
  return (
    <ChooseIconContainer>
      <StyledH2>Please Choose your Icon</StyledH2>
      <StyledButton onClick={() => props.setPlayerIcon("X")}>X</StyledButton>
      <StyledButton onClick={() => props.setPlayerIcon("O")}>O</StyledButton>
    </ChooseIconContainer>
  );
};

export default ChooseIcon;
