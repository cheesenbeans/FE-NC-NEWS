import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";
import "../App.css";

function Articles({ articlesList, setArticlesList }) {
  const [isLoading, setIsLoading] = useState("true");
  const [query, setQuery] = useState({
    category: "",
    order: "",
  })

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, []);

  function handleChange(objectKey, event) {
    setQuery((currQuery) => {
      return { ...currQuery, [objectKey]: event.target.value };
    });
  }

  function handleSubmit(event) {
	event.preventDefault();
    setIsLoading(true);
    fetchArticles("", query.category, query.order).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }

  return (
    <main>
      {isLoading && <p>Articles are loading...</p>}
      <h2 className="articleHead">Latest articles...</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Sort by: </label>
        <select
          def="created_at"
          id="category"
          size="1"
          onChange={(event) => {
            handleChange("category", event);
          }}
          value={query.category || ""}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>

        <select
          def="desc"
          id="order"
          size="1"
          onChange={(event) => {
            handleChange("order", event);
          }}
          value={query.order}
        >
		  <option value="desc">Descending</option>
		  <option value="asc">Ascending</option>
        </select>

        <button type="submit">Sort</button>
      </form>

      {articlesList.map((article) => {
	    return <ArticleCard key={article.article_id} article={article} />;
      })}
    </main>
  );
}
export default Articles;
