import AboutCast from "@/components/litye-meleyshie-shary/about/AboutCast";
import HeroCats from "@/components/litye-meleyshie-shary/hero/HeroCast";
import TabCast from "@/components/litye-meleyshie-shary/tab/TabCast";
import Used from "@/components/kovanye-meleyshie-shary/used/Used";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Литые мелющие шары в Казахстане",
	description:
		"Наши литые мелющие шары изготавливаются из высокохромистого, среднехромистого и низкохромистого чугуна, что позволяет добиться оптимального баланса между твердостью, износостойкостью и ударной вязкостью.",
	robots: "index, follow",
	authors: [{ name: "Литые мелющие шары в Казахстане" }],
	openGraph: {
		title: "Литые мелющие шары в Казахстане",
		description:
			"Наши литые мелющие шары изготавливаются из высокохромистого, среднехромистого и низкохромистого чугуна, что позволяет добиться оптимального баланса между твердостью, износостойкостью и ударной вязкостью.",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const CastPage = () => {
	return (
		<div>
			<HeroCats />
			<AboutCast />
			<Used />
			<TabCast />
		</div>
	);
};

export default CastPage;
