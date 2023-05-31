import "../App.css";
import { useState } from "react";
import { postComment } from "../utils/utils";

export default function AddAComment(article_id) {
  const [commentToAdd, setCommentToAdd] = useState({
    username: "",
    body: ""
  });
  const [addedComment, setAddedComment] = useState({})
  const [errorMessage, setErrorMessage] = useState(false)
  const [commentSuccessful, setCommentSuccessful] = useState(false)

  function handleChange(objectKey, event) {
    setErrorMessage(false)
    setCommentToAdd((currNewItem) => {
      return { ...currNewItem, [objectKey]: event.target.value };
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    if(commentToAdd.username==="" || commentToAdd.body===""){
        setErrorMessage(true)
    } else {
    postComment(article_id, commentToAdd).then((comment)=>{
       setAddedComment(comment)
       setCommentToAdd({})
       setCommentSuccessful(true)
    })}
  }

  return (
  <>
    <section>
      <h3>Add a Comment...</h3>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>You must select a username and write a comment before submitting...</p>}
        <label htmlFor="commentsUsername">Username: </label>
        <select
          def
          id="Username"
          size="1"
          onChange={(event) => {
              handleChange("username", event);
          }}
          value={commentToAdd.username || ""}
        >
          <option value="tickle122">tickle122</option>
          <option value="grumpy19">grumpy19</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="cooljmessy">cooljmessy</option>
          <option value="weegembump">grumweegembumppy19</option>
          <option value="jessjelly">jessjelly</option>
        </select>
        <label htmlFor="body">Comment: </label>
        <input
          id="body"
          onChange={(event) => {
            handleChange("body", event);
          }}
          value={commentToAdd.body || ""}
        ></input>
        <button type="submit">Add your Comment</button>
      </form>
    </section>

     {commentSuccessful && (
        <section>
            <h3>Your comment has been added...</h3>
                <h5>Author: {addedComment.author}</h5>
                <p>{addedComment.body}</p>
                <p>Votes: {addedComment.votes}</p>
                <p>Created at: {addedComment.created_at.substring(0,10)}</p>
        </section>
        )
    }     

</>
  );
}
