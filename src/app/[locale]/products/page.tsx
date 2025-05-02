import Product from "@/components/product/Product";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Продукции Kazshar",
	description: "Кованые, Литые и Катаные мелющие шары в KazShar",
	robots: "index, follow",
	authors: [{ name: "Продукции Kazshar" }],
	openGraph: {
		title: "Продукции Kazshar",
		description: "Кованые, Литые и Катаные мелющие шары в KazShar",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const ProductsPage = () => {
	return (
		<div>
			<Product />
		</div>
	);
};

export default ProductsPage;
