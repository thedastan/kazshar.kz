import Hero from "@/components/home/hero/Hero";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "Сила определяется тем, что за ней скрывается.",
	description:
		"И каждая конструкция надежна настолько, насколько надежны ее структура и фундамент.",
	robots: "index, follow",
	authors: [{ name: "ОсОО Металломир" }],
	openGraph: {
		title: "Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое",
		description:
			"Металлопрокат в Бишкеке. Широкий ассортимент: арматура, оцинкованные листы, круглые и прямоугольные трубы, уголки, швеллер, катанка. Доставка по городу. Звоните!",

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
