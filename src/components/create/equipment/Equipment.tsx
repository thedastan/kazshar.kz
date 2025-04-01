"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useGetToolsQuery } from "@/redux/api/cards";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SkeletonLoader = () => (
	<div className="w-full md:w-full h-[400px] md:h-[350px] bg-gray-300 animate-pulse"></div>
);

const SliderRoom = () => {
	const sliderRef = useRef<Slider | null>(null);
	const { data, isLoading } = useGetToolsQuery();
	const t = useTranslations("Create");

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	useEffect(() => {
		Fancybox.bind("[data-fancybox='gallery']", {});
		return () => {
			Fancybox.destroy();
		};
	}, []);

	return (
		<div id="slider" className="py-20">
			<div className="container mx-auto">
				<div className="flex justify-center text-center">
				 
          <h1 className="md:text-[32px] text-[26px] pb-10 font-[700] text-center">
          {t("gallery")}
        </h1>
				</div>
				<div className="relative">
					<div className="flex justify-between md:items-center items-start absolute w-full h-[450px] flex-row-reverse">
						<button
							className="absolute z-10 flex justify-center items-center right-0 md:right-0 w-10 h-10 text-black rounded-full"
							onClick={() => sliderRef.current?.slickNext()}
						>
							<BsChevronRight size={32} />
						</button>
						<button
							className="absolute z-10 left-0 flex justify-center items-center md:left-0 w-10 h-10 text-black rounded-full"
							onClick={() => sliderRef.current?.slickPrev()}
						>
							<BsChevronLeft size={32} />
						</button>
					</div>
					<div className="py-4 flex justify-center items-center md:px-10 px-0">
						<div className="w-full md:mt-0 mt-10">
							<Slider ref={sliderRef} {...settings}>
								{isLoading
									? [...Array(3)].map((_, index) => (
											<div key={index} className="p-2">
												<SkeletonLoader />
											</div>
									  ))
									: data?.map((el, index) => (
											<div key={index} className="p-2">
												<a
													href={el.tools_image} // Full-size image
													data-fancybox="gallery" // Trigger Fancybox
												>
													<div className="w-full md:w-full h-[400px] md:h-[350px] overflow-hidden relative">
														<Image
															objectFit="cover"
															fill
															src={el.tools_image}
															alt="img"
														/>
													</div>
												</a>
											</div>
									  ))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderRoom;
