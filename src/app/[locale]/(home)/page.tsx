import Hero from "@/components/home/hero/Hero";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "",
	description: "",
	robots: "index, follow",
	authors: [{ name: "" }],
	openGraph: {
		title: "",
		description: "",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const Home = () => {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://metallomir.kg/" />
				<meta name="author" content="ОсОО Металломир" />

				<meta
					property="og:image"
					content="https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg"
				/>

				<meta property="og:type" content="website" />
			</Head>
			<Hero />
		</>
	);
};

export default Home;
