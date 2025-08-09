import GalleryComponents from "@/components/gallery/GalleryComponents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Галерея Kazshar",
	description:
		"Фотогалерея завода Kazshar — производственные процессы, современное оборудование и команда профессионалов, создающих качественные мелющие шары в Казахстане.",
	robots: "index, follow",
	authors: [{ name: "Галерея Kazshar" }],
	openGraph: {
		title: "Галерея Kazshar ",
		description:
			"Фотогалерея завода Kazshar — производственные процессы, современное оборудование и команда профессионалов, создающих качественные мелющие шары в Казахстане.",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const GalleryPage = () => <GalleryComponents />;
export default GalleryPage;
