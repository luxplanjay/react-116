import clsx from "clsx";
import css from "./CatInfo.module.css";
import { Cat } from "../../types/cat";

interface CatInfoProps {
  cat: Cat;
}

export default function CatInfo({
  cat: { image, name, email, taken },
}: CatInfoProps) {
  const containerClsx = clsx(css.container, taken ? css.taken : css.available);

  return (
    <div className={containerClsx}>
      <div className={css.imageWrapper}>
        <img src={image} alt={name} className={css.image} />
      </div>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Email: {email}</p>
      <p className={css.text}>{taken ? "Taken" : "Available"}</p>
    </div>
  );
}
