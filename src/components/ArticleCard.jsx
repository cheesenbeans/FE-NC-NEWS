

export default function ArticleCard({ article: { article_id, title, topic, author, created_at, votes, article_img_url } }) {
    return (
      <article>
        <h3>{title}</h3>
        <p>Topic: {topic}</p>
        <img
          style={{ height: "200px" }}
          src={article_img_url}
          alt={`${title} for sale`}
        />
      </article>
    );
  }