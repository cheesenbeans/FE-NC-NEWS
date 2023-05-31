import "../App.css";

export default function CommentCard({ comment: { body, author, votes, created_at } }) {
    return (
      <article className="commentCard">
        <h5>Author: {author}</h5>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <p>Created at: {created_at.substring(0,10)}</p>
      </article>
    );
  }