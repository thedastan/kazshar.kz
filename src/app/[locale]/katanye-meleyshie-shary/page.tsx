import Used from "@/components/kovanye-meleyshie-shary/used/Used";
import AboutRolled from "@/components/katanye-meleyshie-shary/about/AboutRolled";
import HeroRolled from "@/components/katanye-meleyshie-shary/hero/HeroRolled";
import TabRolled from "@/components/katanye-meleyshie-shary/tab/TabRolled";
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
