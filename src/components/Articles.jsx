import { useEffect } from "react";
import { fetchArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard"
import "../App.css";

function Articles({ articlesList, setArticlesList }) {
	
    
    useEffect(() => {
		fetchArticles().then((articles) => {
			setArticlesList(articles);
		});
	}, []);

    return (
		<main>
			<h2 className="articleHead">Latest articles...</h2>
				{articlesList.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
		</main>
	);



}
export default Articles;