import Used from "@/components/forged/used/Used";
import AboutRolled from "@/components/rolled/about/AboutRolled";
import HeroRolled from "@/components/rolled/hero/HeroRolled";
import TabRolled from "@/components/rolled/tab/TabRolled";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Катаные мелющие шары в Казахстане",
	description:
		"Катаные шары изготавливаются методом горячей прокатки из высококачественных стальных прутков на шаропрокатных станах, что обеспечивает их высокую прочность и равномерную структуру.",
	robots: "index, follow",
	authors: [{ name: "Катаные мелющие в Казахстане" }],
	openGraph: {
		title: "Катаные мелющие в Казахстане",
		description:
			"Катаные шары изготавливаются методом горячей прокатки из высококачественных стальных прутков на шаропрокатных станах, что обеспечивает их высокую прочность и равномерную структуру.",
		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const RolledPage = () => {
	return (
		<div>
			<HeroRolled />
			<AboutRolled />
			<Used />
			<TabRolled />
		</div>
	);
};

export default RolledPage;
