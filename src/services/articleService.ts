import axios from "axios";
import { Article } from "../types/article";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

interface FetchArticlesResp {
  hits: Article[];
}

export const fetchArticles = async (topic: string) => {
  const response = await axios.get<FetchArticlesResp>(`/search?query=${topic}`);
  return response.data.hits;
};
