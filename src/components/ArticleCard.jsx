import "../App.css";
import { Link } from "react-router-dom";

export default function ArticleCard({
  article: { article_id, title, topic, author, created_at, votes, article_img_url },
}) {

  return (
    <div className="wholeArticleCard">
    <article className="articleCard">
      <div className="leftArticleCard">
      <h3 className="articleTitle">{title}</h3>
      
      </div>
      <div className="subinfo">
        <p>Written by: {author}</p>
        <p>Topic: {topic}</p>
        <p>Votes: {votes}</p>
        <p>Date created: {created_at.substring(0, 10)}</p>
      </div>
      <img
        style={{ height: "7rem", width: "7rem" }}
        src={article_img_url}
        alt={`${title} for sale`}
      />
    </article>
    <Link to={`/articles/${article_id}`}> <button className="articleCardButton" >Read the article here</button> </Link>
    </div>
  );
}
