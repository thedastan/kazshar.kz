import AboutCast from "@/components/cast/about/AboutCast";
import HeroCats from "@/components/cast/hero/HeroCast";
import TabCast from "@/components/cast/tab/TabCast";
import Used from "@/components/forged/used/Used";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Литые мелющие шары | Cast Grinding Balls | Құйылған ұнтақтаушы шарлар ",
	description:
		"Наши литые мелющие шары изготавливаются из высокохромистого, среднехромистого и низкохромистого чугуна, что позволяет добиться оптимального баланса между твердостью, износостойкостью и ударной вязкостью. | Our cast grinding balls are made from high-chromium, medium-chromium, and low-chromium cast iron, providing an optimal balance between hardness, wear resistance, and impact toughness. | Біздің құйылған ұнтақтаушы шарлар жоғары хромды, орташа хромды және төмен хромды шойыннан жасалады, бұл қаттылық, тозуға төзімділік және соққыға төзімділіктің оңтайлы теңгерімін қамтамасыз етеді.",
	robots: "index, follow",
	authors: [{ name: "" }],
	openGraph: {
		title:
			"Литые мелющие шары | Cast Grinding Balls | Құйылған ұнтақтаушы шарлар ",
		description:
			"Наши литые мелющие шары изготавливаются из высокохромистого, среднехромистого и низкохромистого чугуна, что позволяет добиться оптимального баланса между твердостью, износостойкостью и ударной вязкостью. | Our cast grinding balls are made from high-chromium, medium-chromium, and low-chromium cast iron, providing an optimal balance between hardness, wear resistance, and impact toughness. | Біздің құйылған ұнтақтаушы шарлар жоғары хромды, орташа хромды және төмен хромды шойыннан жасалады, бұл қаттылық, тозуға төзімділік және соққыға төзімділіктің оңтайлы теңгерімін қамтамасыз етеді.",

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
