import "../App.css";

export default function CommentCard({ comment: { body, author, votes } }) {
    return (
      <>
      {body && ( 
      <article className="commentCard">
        <h5>Author: {author}</h5>
        <p>{body}</p>
        <p>Votes: {votes}</p>
      </article>
      )}
      </>
    );
  }