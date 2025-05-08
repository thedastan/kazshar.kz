import Aboutforged from "@/components/forged/about/Aboutforged";
import Heroforged from "@/components/forged/hero/Heroforged";
import Tabforged from "@/components/forged/tab/Tabforged";
import Used from "@/components/forged/used/Used";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Кованые мелющие шары в Казахстане",
	description:
		"Наши кованые шары производятся из высококачественных стальных слитков методом горячей ковки, что обеспечивает их исключительную прочность и долговечность.",
	robots: "index, follow",
	authors: [{ name: "Кованые мелющие шары в Казахстане" }],
	openGraph: {
		title: "Кованые мелющие шары в Казахстане",
		description:
			"Наши кованые шары производятся из высококачественных стальных слитков методом горячей ковки, что обеспечивает их исключительную прочность и долговечность.",

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
