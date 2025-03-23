import React from "react";
import AboutComponent from "@/components/about/AboutComponent";
import { Metadata } from "next";

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

const AboutPage = () => {
	return (
		<div>
			<AboutComponent />
		</div>
	);
};

export default AboutPage;
