import { Button } from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import React from "react";
import { SlArrowDown } from "react-icons/sl";

const Hero = () => {
	const t = useTranslations("Hero");
	return (
		<section className=" relative">
			<div className="relative w-full h-[100vh] overflow-hidden py-10">
				{" "}
				<iframe
					className="absolute top-0 left-0 w-full h-full    md:scale-[1.2] scale-[3.2]"
					style={{ objectFit: "cover" }}
					src="	https://kinescope.io/embed/hYvbnm42uzXVxqKM9xhwLY"
					allow="autoplay; muted"
				/>
			</div>

			<div className="bg-[#000000b2] w-full h-[100vh] absolute top-0 left-0">
				<div className="container flex flex-col justify-center items-center text-white h-[100vh] gap-8">
					<TitleComponent data-aos="fade-up" className="md:w-[75%] w-full">
						 {t("title")}
					</TitleComponent>

					<Button className="rounded-[50px] px-5 md:absolute relative bottom-0 left-0 md:left-5 md:bottom-5">
						 {t("btn")}
					</Button>

					<TitleComponent className="text-white absolute bottom-5">
						<SlArrowDown />
					</TitleComponent>
				</div>
			</div>
		</section>
	);
};

export default Hero;
