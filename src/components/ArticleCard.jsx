import "../App.css";

export default function ArticleCard({
  article: { title, topic, author, created_at, votes, article_img_url },
}) {
  return (
    <article className="articleCard">
      <h3 className="articleTitle">{title}</h3>
      <div className="subinfo">
        <p>Written by: {author}</p>
        <p>Topic: {topic}</p>
        <p>Votes: {votes}</p>
        <p>Date created: {created_at.substring(0, 10)}</p>
      </div>
      <img
        style={{ height: "10rem", width: "10rem" }}
        src={article_img_url}
        alt={`${title} for sale`}
      />
    </article>
  );
}
