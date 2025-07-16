import { DebouncedState } from "use-debounce";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onSearch: DebouncedState<(newSearchQuery: string) => void>;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className={css.searchInput}
      defaultValue={value}
      onChange={handleChange}
    />
  );
}
