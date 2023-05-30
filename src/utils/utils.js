import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-o4g7.onrender.com/",
});

export const fetchArticles = () => {
  return ncNewsApi.get("/api/articles").then(({ data: { articles } }) => {
    return articles;
  });
};
