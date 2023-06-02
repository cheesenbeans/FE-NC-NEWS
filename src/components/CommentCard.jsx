import { deleteCommentByCommentId } from "../utils/utils";
import "../App.css";

export default function CommentCard({
  comment: { comment_id, body, author, votes },
  commentsByArticleId,
  setCommentsByArticleId,
  setCommentDeleted
}) {

  

  function deleteComment(id) {
    const filtered =  commentsByArticleId.filter((commentToDelete) => { 
      return commentToDelete.comment_id !== id
    }); 
    setCommentsByArticleId(filtered);
    setCommentDeleted(true)
    deleteCommentByCommentId(id);
  }

  return (
    <>
      {body && (
        <article className="commentCard">
          <div className="articleLeft">
            <h5>Author: {author}</h5>
            <p>{body}</p>
            <p>Votes: {votes}</p>
          </div>
          <div className="articleRight">
            <button onClick={() => deleteComment(comment_id)}>
              Delete Comment
            </button>
          </div>
        </article>
      )}
    </>
  );
}
