import { deleteCommentByCommentId } from "../utils/utils";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "../App.css";

export default function CommentCard({
  comment: { comment_id, body, author, votes },
  commentsByArticleId,
  setCommentsByArticleId,
  setCommentDeleted,
}) {

  const { user, setUser } = useContext(UserContext);

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
            <h5>Author: {author}</h5>
            <p>{body}</p>
            <p>Votes: {votes}</p>
            {user.username===author && 
            <button onClick={() => deleteComment(comment_id)}>
              Delete Comment
            </button>
            }
        </article>
      )}
    </>
  );
}
