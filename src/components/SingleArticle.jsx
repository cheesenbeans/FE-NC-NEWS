import { useEffect, useState } from "react";
import { fetchArticleById, fetchCommentsByArticleId } from "../utils/utils";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddAComment from "./AddAComment";
import "../App.css";

export default function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [commentsByArticleId, setCommentsByArticleId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
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
  

  return (
    <article>
      <div className="article">
        {isLoading && <p>This article is loading...</p>}
        <h3>{singleArticle.title}</h3>
        <h4>Written by: {singleArticle.author}</h4>
        <h4>Topic: {singleArticle.topic}</h4>
        <p>Votes: {singleArticle.votes}</p>
        <p>{singleArticle.body}</p>
      </div>
      <section className="comments">
        <h3 className="commentsh3">Comments</h3>
        <AddAComment article_id={singleArticle.article_id} commentsByArticleId={commentsByArticleId} setCommentsByArticleId={setCommentsByArticleId} />
        {commentsLoading && <p>Comments are loading...</p>}
        <ul key="commentCard">
          {(commentsByArticleId.length === 0 && <p>No comments</p> ||
            commentsByArticleId.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment}  />;
            }))}
        </ul>
      </section>
    </article>
  );
}
