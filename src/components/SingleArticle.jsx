import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/utils";
import { useParams } from "react-router-dom";
import "../App.css";

export default function SingleArticle() {
    const [singleArticle,  setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {article_id}=useParams()
    
    useEffect(()=>{
        fetchArticleById(article_id).then((article)=>{
            setSingleArticle(article)
            setIsLoading(false)
        })
    }, [])

    return (
        <article>
            {(isLoading && <p>This article is loading...</p>)}
            <h3>{singleArticle.title}</h3>
            <h4>Written by: {singleArticle.author}</h4>
            <h4>Topic: {singleArticle.topic}</h4>
            <p>Votes: {singleArticle.votes}</p>
            <p>{singleArticle.body}</p>
        </article>

    )


}