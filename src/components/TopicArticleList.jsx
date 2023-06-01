import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "../App.css";
import { fetchArticles } from "../utils/utils";

export default function TopicArticleList({ topicQuery }) {
  const [isLoading, setIsLoading] = useState("true");
  const [articlesListByTopic, setArticlesListByTopic] = useState([]);

  useEffect(() => {
    fetchArticles(topicQuery).then((articles) => {
      setArticlesListByTopic(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading && <p>Articles are loading...</p>}
      <h2 className="articleHead">Latest articles...</h2>
      {articlesListByTopic.length === 0 && <p>No articles found!</p>}
      {articlesListByTopic.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </main>
  );
}
