import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import React from "react";
import { FaMountainCity } from "react-icons/fa6";
import { GiConcreteBag, GiMetalPlate } from "react-icons/gi";
import { PiLightningAFill } from "react-icons/pi";

const Used = () => {
	const t = useTranslations("Forget");

	const data = [
		{
			num: "1",
			icon: <FaMountainCity />,
			title: t("card"),
		},
		{
			num: "2",
			icon: <GiConcreteBag />,
			title: t("card2"),
		},
		{
			num: "3",
			icon: <PiLightningAFill />,
			title: t("card3"),
		},
		{
			num: "5",
			icon: <GiMetalPlate />,
			title: t("card5"),
		},
	];
	return (
		<div className="py-20">
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<TitleComponent className=" text-center text-[23px]  mb-10">
						{t("used")}
					</TitleComponent>
					<div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8">
						{data.map((el, index) => (
							<div
								key={index}
								className="flex flex-col justify-center items-center text-center  ">
								<h1 className="text-[50px] text-[#fff] bg-[#2b8cb9] p-4 rounded-[50px]">
									{el.icon}
								</h1>
								<h3 className="text-[18px] mt-2 w-full h-[60px] font-[600]">
									{el.title}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Used;
