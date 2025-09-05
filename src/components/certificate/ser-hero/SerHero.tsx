import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import React from "react";

const SerHero = () => {
	const t = useTranslations("SerHero");
	return (
		<section className="w-full bg-[#ffffff] py-16">
			<div className="container text-start text-black flex flex-col gap-8 items-start justify-center">
				<TitleComponent className="text-start">{t("title")}</TitleComponent>
				<Description className="w-full max-w-[700px] text-[#585858]">
					{t("text")}
				</Description>
				{/* <Link
					target={"_blank"}
					href={
						"/сткз КазШар (1).pdf"
					}>
					<Button className=" rounded-sm w-full flex items-center gap-2">
						{t("pdf")} <IoDownloadOutline />
					</Button>
				</Link> */}
			</div>
		</section>
	);
};

export default SerHero;
