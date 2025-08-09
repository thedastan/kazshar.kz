import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import React from "react";

const HeroNews = () => {
	const t = useTranslations("HeroNews");
	return (
		<section className="w-full bg-[#ffffff] py-16">
			<div className="container text-start text-black flex flex-col gap-8 items-start justify-center">
			<TitleComponent className="text-start">{t("title")}</TitleComponent>
				<Description className="w-full max-w-[700px] text-[#585858]">
					{t("desc")}
 				</Description>
			</div>
		</section>
	);
};

export default HeroNews;
