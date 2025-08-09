import CertificateComponents from "@/components/certificate/CertificateComponents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Сертификаты, лицензии и стандарты | Kazshar",
	description:
		"Документы, подтверждающие качество и соответствие продукции завода Kazshar международным стандартам: сертификаты, лицензии и нормативы.",
	robots: "index, follow",
	authors: [{ name: "Kazshar" }],
	openGraph: {
		title: "Сертификаты, лицензии и стандарты | Kazshar",
		description:
			"Документы, подтверждающие качество и соответствие продукции завода Kazshar международным стандартам: сертификаты, лицензии и нормативы.",
		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg", // можешь заменить на подходящее изображение документа
		type: "website",
	},
};

const CertificatePage = () => <CertificateComponents />;
export default CertificatePage;
