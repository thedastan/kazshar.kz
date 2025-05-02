import NewsComponent from "@/components/news/NewsComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Новости kazshar",
	description:
		"Свежие новости о производстве, ценах и инновациях в сфере металлопродукции.",
	robots: "index, follow",
	authors: [{ name: "Новости kazshar" }],
	openGraph: {
		title: "Новости kazshar",
		description:
			"Свежие новости о производстве, ценах и инновациях в сфере металлопродукции.",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const NewsPage = () => {
	return (
		<div>
			<NewsComponent />
		</div>
	);
};

export default NewsPage;
