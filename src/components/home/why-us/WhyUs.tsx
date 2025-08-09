import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const WhyUs = () => {

	const t = useTranslations("WhyUs");

	const data = [
		{
			desc: t("desc1"),
		},
		{
			desc: t("desc2"),
		},
		{
			desc: t("desc3"),
		},
		{
			desc: t("desc4"),
		},
		{
			desc: t("desc5"),
		},
		{
			desc: t("desc6"),
		},
	];
	return (
		<section className="w-full py-16">
			<div className="container">
        <TitleComponent>{t("title")}</TitleComponent>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
					{data.map((el, index) => (
						<Description data-aos="fade-up" key={index} className="text-black inline-flex items-start gap-2">
							<IoMdCheckmark size={80} className="h-[30px]"/>
							{el.desc}
						</Description>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
