import "../App.css";
import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/utils";
import TopicCard from "./TopicCard"

function Topics({setTopicQuery}) {
	const [topicsList, setTopicsList] = useState([])
    const [isLoading, setIsLoading] = useState("true")
    
    useEffect(() => {
		fetchTopics().then((topics) => {
			setTopicsList(topics);
			setIsLoading(false)
		});
	}, []);

    return (
		<main className="wholeArticleCard">
			{isLoading && <p>Topics are loading...</p>}
			<h2 className="articleHead">Select your Topic...</h2>
				{topicsList.map((topic) => {
					return <TopicCard key={topic.slug} topic={topic} setTopicQuery={setTopicQuery}/>;
				})}
		</main>
	);
}
export default Topics;