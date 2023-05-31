import { useEffect, useState } from "react";
import { fetchArticleById, fetchCommentsByArticleId, patchVotesByArticleId } from "../utils/utils";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import "../App.css";

export default function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [commentsByArticleId, setCommentsByArticleId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [failedPatch, setFailedPatch] = useState(false)
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        setSingleArticle(article);
        setIsLoading(false);
        return article;
      })
      .then((article) => {
        fetchCommentsByArticleId(article.article_id).then((comments) => {
          setCommentsByArticleId(comments);
          setCommentsLoading(false);
        });
      });
  }, []);

  function submitVote(article_id, num) {
    setFailedPatch(false)
    patchVotesByArticleId(article_id, num).catch((err)=>{
        setFailedPatch(true)
        setSingleArticle((currArticle) => {
            return { ...currArticle, votes: currArticle.votes - num };
          }); 
    });
    setSingleArticle((currArticle) => {
            return { ...currArticle, votes: currArticle.votes + num };
          }); 
        };

  return (
    <article>
      <div className="article">
        <div className="articleLeft">
        {isLoading && <p>This article is loading...</p>}
        <h3>{singleArticle.title}</h3>
        <h4>Written by: {singleArticle.author}</h4>
        <h4>Topic: {singleArticle.topic}</h4>
        <p>{singleArticle.body}</p>
        </div>
        <div className="articleRight">
        <p>Votes: {singleArticle.votes}</p>
        {failedPatch && <p>ERROR - vote has not been submitted</p>}
        <button onClick={() => submitVote(singleArticle.article_id, 1)}><span role="img" aria-label="thumbs-up-emoji">&#128077;</span></button>
        <button onClick={() => submitVote(singleArticle.article_id, -1)}><span role="img" aria-label="thumbs-down-emoji">&#128078;</span></button>
        </div>
      </div>
      <section className="comments">
        <h3 className="commentsh3">Comments</h3>
        {commentsLoading && <p>Comments are loading...</p>}
        <ul>
          {(commentsByArticleId.length === 0 && <p>No comments</p> ||
            commentsByArticleId.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            }))}
        </ul>
      </section>
    </article>
  );
}
