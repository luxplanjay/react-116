import AppLogo from "../AppLogo/AppLogo";
import UserMenu from "../UserMenu/UserMenu";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.container}>
      <AppLogo />
      <UserMenu username="Jacob" />
    </header>
  );
}
