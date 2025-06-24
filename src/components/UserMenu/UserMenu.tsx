import css from "./UserMenu.module.css";

interface UserMenuProps {
  username: string;
}

export default function UserMenu({ username }: UserMenuProps) {
  return (
    <div className={css.menu}>
      <p className={css.username}>Welcome, {username}</p>
      <button className={css.button}>Log out</button>
    </div>
  );
}
