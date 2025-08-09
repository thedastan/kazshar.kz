import HomeComponents from "@/components/home/HomeComponents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "kazshar.kz",
	description:
		"И каждая конструкция надежна настолько, насколько надежны ее структура и фундамент.",
	robots: "index, follow",
	authors: [{ name: "kazshar.kz" }],
	openGraph: {
		title: "kazshar.kz",
		description:
			"И каждая конструкция надежна настолько, насколько надежны ее структура и фундамент.",
		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};


const Home = () => <HomeComponents />;
export default Home;
