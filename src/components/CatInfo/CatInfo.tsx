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
      <img src={image} alt={name} width="120" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>{taken ? "Taken" : "Available"}</p>
    </div>
  );
}
