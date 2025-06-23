import css from "./UserMenu.module.css";

interface UserMenuProps {
  username: string;
}

export default function UserMenu({ username }: UserMenuProps) {
  return (
    <div className={css.container}>
      <p className={css.name}>Welcome, {username}</p>
      <button>Log out</button>
    </div>
  );
}
