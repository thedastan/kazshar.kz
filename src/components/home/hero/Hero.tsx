import { Button } from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { SlArrowDown } from "react-icons/sl";

import img from "@/assets/img5.jpeg";
import Link from "next/link";

const Hero = () => {
	const t = useTranslations("Hero");
	return (
		<section className=" relative">
			<div className="relative w-full h-[100vh] overflow-hidden py-10">
				{" "}
				<Image fill objectFit="cover" src={img} alt="img" />
			</div>

			<div className="bg-[#000000b2] w-full h-[100vh] absolute top-0 left-0">
				<div className="container flex flex-col justify-center items-center text-white h-[100vh] gap-8">
					<TitleComponent data-aos="fade-up" className="md:w-[75%] w-full">
						{t("title")}
					</TitleComponent>

					<Link href={"https://youtu.be/WfrAvrU3kG0"} target={"_blank"}>
						<Button className="rounded-[50px] px-5 md:absolute relative bottom-0 left-0 md:left-5 md:bottom-5">
							{t("btn")}
						</Button>
					</Link>

					<TitleComponent className="text-white absolute bottom-5">
						<SlArrowDown />
					</TitleComponent>
				</div>
			</div>
		</section>
	);
};

export default Hero;
