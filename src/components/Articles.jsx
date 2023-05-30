import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard"
import "../App.css";

function Articles({ articlesList, setArticlesList }) {
	const [isLoading, setIsLoading] = useState("true")

    useEffect(() => {
		fetchArticles().then((articles) => {
			setArticlesList(articles);
			setIsLoading(false)
		});
	}, []);

    return (
		<main>
			{isLoading && <p>Articles are loading...</p>}
			<h2 className="articleHead">Latest articles...</h2>
				{articlesList.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
		</main>
	);



}
export default Articles;