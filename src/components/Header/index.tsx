import { StyledHeader, ThemeButton } from "./styles";

const Header = (props: any) => {
  const handlerClick = () => {
    localStorage.setItem("isDarkTheme", `${!props.isDarkTheme}`);
    props.setIsDarkTheme(!props.isDarkTheme);
  };

  return (
    <>
      <StyledHeader>Tic Tac Toe</StyledHeader>
      <ThemeButton onClick={handlerClick}>
        {props.isDarkTheme ? "🖌🌒" : "🖌🌔"}
      </ThemeButton>
    </>
  );
};

export default Header;
