import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import { fetchArticles } from "../services/articleService";
import Pagination from "./Pagination";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [topic, setTopic] = useState("");
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.nbPages ?? 0;

  const handleFormSubmit = (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {isSuccess && (
        <Pagination
          page={currentPage}
          total={totalPages}
          onChange={setCurrentPage}
        />
      )}
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <strong>Oops there was an error...</strong>}
      {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
    </>
  );
}
