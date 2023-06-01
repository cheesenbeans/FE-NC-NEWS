import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-o4g7.onrender.com/",
});

export const fetchArticles = (topicQuery) => {
  return ncNewsApi.get("/api/articles", {params: {topic: topicQuery, all_data: true,}})
  .then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = (article_id) => {
  return ncNewsApi.get(`/api/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/api/articles/${article_id}/comments`).then(({ data: { comments } }) => {
    return comments;
  });
};

export const patchVotesByArticleId = (article_id, num) => {
  const patchBody = {
    inc_votes: num
  }
  return ncNewsApi.patch(`/api/articles/${article_id}`, patchBody)
};

export const fetchTopics = () => {
  return ncNewsApi.get("/api/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

