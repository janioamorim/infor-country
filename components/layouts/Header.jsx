import Link from "next/link";
import {
  AppBar,
  ToggleThemeButton,
  HeaderContainer,
  HeaderTitle,
  ThemeText,
} from "../../styles/header_styles";

export default function Header({ theme, toggleTheme }) {
  return (
    <AppBar>
      <HeaderContainer>
        <Link href="/" passHref>
          <HeaderTitle>
            <h2>Países do Mundo</h2>
          </HeaderTitle>
        </Link>

        <ToggleThemeButton onClick={toggleTheme}>
          <span className="material-icons">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
          <ThemeText>Modo {theme === "dark" ? " Claro" : " Escuro"}</ThemeText>
        </ToggleThemeButton>
      </HeaderContainer>
    </AppBar>
  );
}
