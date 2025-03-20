"use client";
import React, { useRef } from "react";
import { links_products } from "../navbar/data";
import img from "@/assets/about.jpg";

const Product = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (event: React.WheelEvent) => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft += event.deltaY;
		}
	};

	return (
		<div className="w-full h-screen overflow-hidden absolute top-0">
			<div
				ref={scrollContainerRef}
				onWheel={handleScroll}
				style={{ scrollbarWidth: "none" }}
				className="w-full h-full overflow-x-scroll overflow-y-hidden">
				<div className="flex min-w-max h-full">
					<div className="bg-[#c71212] text-white text-[50px] font-[700] w-[700px] h-full flex items-center justify-center">
						Ассортимент <br /> продукции
					</div>

					{links_products.map((el, index) => (
						<div
						key={index}
							style={{ backgroundImage: `url(${img.src})` }}
							className="relative group   border-2 border-black text-white text-[50px] font-[700] w-[700px] h-full flex items-center justify-center transition-all duration-1000">
							<div style={{transition:"1s"}} className="absolute z-0 inset-0 bg-[#000000b0]  group-hover:bg-[#0000004f] transition-opacity duration-1000"></div>
							<div className=" relative z-20">
								<h1 className="border-black text-[#999999] text-[50px] font-[700] w-[500px] text-start z-10 group-hover:text-[#ffffff] transition-colors duration-1000">
									{el.title}
								</h1>
								<p className="border-black text-[#999999] text-[18px] font-[700] w-[500px] text-start z-10 group-hover:text-[#ffffff] transition-colors duration-1000">
									{el.desc}
								</p>
							</div> 
						</div>
					))}

					<div className="bg-[#c71212] text-white text-[50px] font-[700] w-[700px] h-full flex items-center justify-center">
						О Нас
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
