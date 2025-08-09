import React from "react";
import NewsCards from "./newsCards/NewsCards";
import HeroNews from "./hero-news/HeroNews";

const NewsComponents = () => {
	return (
		<section>
			<HeroNews />
			<NewsCards />
		</section>
	);
};

export default NewsComponents;
