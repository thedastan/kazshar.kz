import { useTranslations } from "next-intl";
import React from "react";

const Heroforged = () => {
	const t = useTranslations("Forget");
	return (
		<div className="relative w-[100%] h-[500px] overflow-hidden">
			<div className="w-full h-[500px] overflow-hidden">
				<iframe
					className="absolute top-0 left-0 w-full h-full    md:scale-[1.2] scale-[1.2]"
					style={{ objectFit: "cover" }}
					src="https://kinescope.io/embed/8cEfSExVYPMjFiJ1YQiGX6"
					allow="autoplay; muted"
				/>
			</div>

			<div className="flex px-[20px] md:px-16 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
				<div className="">
					<h1 className="md:text-[54px] text-[30px] text-[#ffffff8f] font-[700] w-full md:w-[760px] md:leading-[70px] leading-[50px] text-center">
						{t("title")}
					</h1>
				</div>
			</div>

		 
		</div>
	);
};

export default Heroforged;
