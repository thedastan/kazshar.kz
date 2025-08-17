import { Description } from "@/components/ui/text/Description";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
	const t = useTranslations("Footer");
	return (
		<footer className="bg-[#1b1b1b] py-3">
			<div className="flex md:flex-row flex-col text-center justify-between container text-white">
				<Description>{t("text1")}</Description>
				<a href="https://bir.kg" target="_blank"><Description>{t("text2")}</Description></a>
			</div>
		</footer>
	);
};

export default Footer;
