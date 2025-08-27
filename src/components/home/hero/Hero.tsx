"use client";

import { Button } from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

// картинки
import img1 from "@/assets/img5.jpeg";
import img2 from "@/assets/img3.jpeg";
import img3 from "@/assets/img4.jpeg";

const images = [img1, img2, img3];

const Hero = () => {
	const t = useTranslations("Hero");
	const [current, setCurrent] = useState(0);

	// авто-смена изображений
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 4000); // каждые 5 секунд
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative">
			{/* контейнер для картинок */}
			<div className="relative w-full h-[100vh] overflow-hidden">
				{images.map((src, index) => (
					<Image
						key={index}
						fill
						src={src}
						alt={`hero-${index}`}
						className={`object-cover transition-opacity duration-1000 ease-in-out ${
							index === current ? "opacity-100" : "opacity-0"
						}`}
						priority={index === 0}
					/>
				))}
			</div>

			{/* затемнение */}
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
