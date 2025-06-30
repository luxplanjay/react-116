import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";
import ArticleList from "./ArticleList/ArticleList";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (searchTopic: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const newArticles = await fetchArticles(searchTopic);
      setArticles(newArticles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <strong>Whoops, that's an error!!!</strong>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
