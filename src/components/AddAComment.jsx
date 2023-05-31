import "../App.css";
import { useState } from "react";
import { postComment } from "../utils/utils";

export default function AddAComment(article_id) {
  const [commentToAdd, setCommentToAdd] = useState({
    username: "tickle122",
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
    console.log(commentToAdd)
    if(commentToAdd.username==="" || commentToAdd.body===""){
        setErrorMessage(true)
    } else {
    postComment(article_id, commentToAdd).then((comment)=>{
       setAddedComment(comment)
       setCommentToAdd({username: "tickle122",
       body: ""})
       setCommentSuccessful(true)
    })}
  }

  return (
  <>
    <section className="addAComment">
      <h3>Add a Comment...</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentsUsername">Username: </label>
        <select
          def="true"
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
        <span>
            <p></p>
        </span>
        <label htmlFor="body">Comment: </label>
        <input
          id="body"
          type="text" 
          style={{ height: "3rem", width: "75%" }}
          onChange={(event) => {
            handleChange("body", event);
          }}
          value={commentToAdd.body || ""}
        ></input>
        <span>
            <p></p>
        </span>
        <button type="submit">Add your Comment</button>
      </form> 
      {errorMessage && <p className="errorMessage">You must select a username and write a comment before submitting...</p>}
    </section>
   
     {commentSuccessful && (
        <ul className="successfulComment">
            <h3>Your comment has been added...</h3>
            <article className="successfulCommentCard">
                <h5>Author: {addedComment.author}</h5>
                <p>{addedComment.body}</p>
                <p>Votes: {addedComment.votes}</p>
                <p>Created at: {addedComment.created_at.substring(0,10)}</p>
                </article>
                
        </ul>
        )
    }     

</>
  );
}
