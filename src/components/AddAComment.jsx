import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { postComment } from "../utils/utils";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function AddAComment({
  article_id,
  commentsByArticleId,
  setCommentsByArticleId,
}) {
  const { user } = useContext(UserContext);
  const [commentToAdd, setCommentToAdd] = useState({
    username: user.username,
    body: "",
  });
  const [addedComment, setAddedComment] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [postErrorMessage, setPostErrorMessage] = useState(false);
  const [commentSuccessful, setCommentSuccessful] = useState(false);
  const [loginMessage, setLoginMessage] = useState(false);

  function handleChange(objectKey, event) {
    setErrorMessage(false);
    setCommentToAdd((currNewItem) => {
      return { ...currNewItem, [objectKey]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (commentToAdd.username === "") {
      setLoginMessage(true);
    } else if (commentToAdd.body === "") {
      setErrorMessage(true);
    } else {
      postComment(article_id, commentToAdd).catch((err) => {
        setPostErrorMessage(true);
      });
      setAddedComment(commentToAdd);
      setCommentSuccessful(true);
      setCommentToAdd({
        username: user.username,
        body: "",
      });
      setCommentsByArticleId((commentsByArticleId) => {
        let newComment = {
          author: addedComment.username,
          body: addedComment.body,
          votes: 0,
        };
        return [newComment, ...commentsByArticleId];
      });
    }
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  return (
    <>
      <section className="addAComment">
        <h3>Add a Comment...</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="body">Comment: </label>
          <input
            id="body"
            type="text"
            style={{ height: "3rem", width: "65%" }}
            onChange={(event) => {
              handleChange("body", event);
            }}
            value={commentToAdd.body || ""}
          ></input>
          <span>
            <p></p>
          </span>
          <button type="submit">Add your Comment</button>
        </form>
        {loginMessage && (
          <>
            <p className="errorMessage">
              You must be logged in to post a comment.
            </p>
            <label htmlFor="body">Click here to login: </label>
            <Link className="homeLink" to="/">
              <button> Home Login </button>
            </Link>
          </>
        )}
        {errorMessage && (
          <p className="errorMessage">
            You must write a comment before submitting...
          </p>
        )}
      </section>

      {commentSuccessful && (
        <div className="successfulComment">
          <h3>Your comment has been added...</h3>
          <article className="successfulCommentCard">
            <h5>Author: {addedComment.username}</h5>
            <p>{addedComment.body}</p>
            <p>Votes: 0</p>
            <button onClick={handleDelete}>Undo add comment</button>
          </article>
        </div>
      )}

      {postErrorMessage && (
        <p className="errorMessage">Error: comment not added</p>
      )}
    </>
  );
}

export default AddAComment;
