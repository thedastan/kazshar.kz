import Tabforged from "@/components/cast/tab/TabCast";
import Aboutforged from "@/components/forged/about/Aboutforged";
import Heroforged from "@/components/forged/hero/Heroforged";
import Used from "@/components/forged/used/Used";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Кованые мелющие шары | Forged Grinding Balls | Қақталған ұнтақтаушы шарлар ",
	description:
		"Наши кованые шары производятся из высококачественных стальных слитков методом горячей ковки, что обеспечивает их исключительную прочность и долговечность. | Our forged balls are produced from high-quality steel billets using hot forging, ensuring exceptional strength and durability. | Біздің қақталған шарлар жоғары сапалы болат тұтқалардан ыстық қақтау әдісімен жасалады, бұл олардың ерекше беріктігі мен ұзақ мерзімділігін қамтамасыз етеді.",
	robots: "index, follow",
	authors: [{ name: "" }],
	openGraph: {
		title:
			"Кованые мелющие шары | Forged Grinding Balls | Қақталған ұнтақтаушы шарлар ",
		description:
			"Наши кованые шары производятся из высококачественных стальных слитков методом горячей ковки, что обеспечивает их исключительную прочность и долговечность. | Our forged balls are produced from high-quality steel billets using hot forging, ensuring exceptional strength and durability. | Біздің қақталған шарлар жоғары сапалы болат тұтқалардан ыстық қақтау әдісімен жасалады, бұл олардың ерекше беріктігі мен ұзақ мерзімділігін қамтамасыз етеді.",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};
const ForgedPage = () => {
	return (
		<div>
			<Heroforged />
			<Aboutforged />
			<Used />
			<Tabforged />
		</div>
	);
};

export default ForgedPage;
