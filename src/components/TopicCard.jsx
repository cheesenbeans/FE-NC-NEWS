import "../App.css";

import { Link } from "react-router-dom";
import TopicArticleList from "./TopicArticleList";

export default function TopicCard({
  topic: { slug, description },
  setTopicQuery
}) {
    
function handleClick(){
    setTopicQuery(slug)
}

  return (
    <article className="topicCard">
    <div className="leftArticleCard">
      <h3>Topic Title: {slug}</h3>
      <p>{description}</p>
    </div>
      <Link to={`/topic=${slug}`}>
        <button onClick={handleClick} className="topicButton">Read articles</button>
      </Link>
    </article>
  );
}
