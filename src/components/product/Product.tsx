"use client";
import React, { useRef } from "react";
import { getLinksProducts } from "../navbar/data";
import img from "@/assets/about.jpg";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { useTranslations } from "next-intl";

const Product = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (event: React.WheelEvent) => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft += event.deltaY;
		}
	};

	const language = useTranslations("HeroMenu");
	const t = useTranslations("Product");
	const links = getLinksProducts(language);

	return (
		<div className="w-full h-screen overflow-hidden absolute top-0">
			<div
				ref={scrollContainerRef}
				onWheel={handleScroll}
				style={{ scrollbarWidth: "none" }}
				className="w-full h-full overflow-x-scroll overflow-y-hidden">
				<div className="flex min-w-max h-full  ">
					<div className="bg-[#c71212] text-white text-[42px] font-[700] w-[350px] md:w-[400px] h-full flex flex-col items-center justify-center">
						<div className="w-[300px] leading-[1.2] flex text-center">
							{t("asorti")}
						</div>
						<p>
							<CgArrowLongRight />
						</p>
					</div>

					{links.map((el, index) => (
						<Link key={index} href={el.path}>
							<div
								style={{ backgroundImage: `url(${img.src})` }}
								className="relative group   border-2 border-black text-white text-[50px] font-[700] md:w-[700px] w-[400px] h-full flex items-center justify-center transition-all duration-1000">
								<div
									style={{ transition: "1s" }}
									className="absolute z-0 inset-0 bg-[#000000b0]  group-hover:bg-[#0000004f] transition-opacity duration-1000"></div>
								<div className=" relative z-20 flex flex-col items-center">
									<h1 className=" border-black text-[#999999] text-[50px] font-[700]   md:w-[500px] w-[348px] text-start z-10 group-hover:text-[#ffffff] transition-colors duration-1000">
										{el.title}
									</h1>
									<p className="border-black text-[#999999] text-[18px] font-[700]  md:w-[500px] w-[350px] text-start z-10 group-hover:text-[#ffffff] transition-colors duration-1000">
										{el.desc}
									</p>
								</div>
							</div>
						</Link>
					))}

					<div className="bg-[#c71212] text-white font-[700] w-[350px] md:w-[400px] h-full flex flex-col items-center justify-center">
						<h1 className="text-[42px]"> {t("about")}</h1>
						<p className="text-[18px] text-[#fff]"> {t("about_des")}</p>
						<button
							style={{ transition: "0.3s" }}
							className="text-[18px] border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] w-[230px] h-[40px] mt-[20px]">
							<Link href={"/about"}> {t("about_btn")}</Link>
						</button>
					</div>
				</div>
			</div>
			z
		</div>
	);
};

export default Product;
