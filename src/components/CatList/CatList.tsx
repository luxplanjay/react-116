import CatInfo from "../CatInfo/CatInfo";
import { Cat } from "../../types/cat";
import css from "./CatList.module.css";

interface CatListProps {
  items: Cat[];
}

export default function CatList({ items }: CatListProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.listItem}>
          <CatInfo cat={item} />
        </li>
      ))}
    </ul>
  );
}
