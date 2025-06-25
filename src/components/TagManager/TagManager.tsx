import { useState } from "react";
import css from "./TagManager.module.css";

const initialTags = [
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Ideas",
  "Travel",
  "Finance",
  "Health",
  "Important",
  "Todo",
];

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const deleteTag = (tagName: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag !== tagName);
    });
  };

  const visibleTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <label className={css.label}>
        Search tags
        <input
          type="text"
          className={css.input}
          value={searchText}
          onChange={updateSearchText}
        />
      </label>
      <ul className={css.tagList}>
        {visibleTags.map((tag) => (
          <li key={tag} className={css.tagItem}>
            <span className={css.tagText}>{tag}</span>
            <button className={css.closeButton} onClick={() => deleteTag(tag)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
