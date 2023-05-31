import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-o4g7.onrender.com/",
});

export const fetchArticles = () => {
  return ncNewsApi.get("/api/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = (article_id) => {
  return ncNewsApi.get(`/api/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};
