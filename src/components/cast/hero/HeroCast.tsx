import { links_products } from "@/components/navbar/data";
import Link from "next/link";
import React from "react";

const HeroCats = () => {
	return (
		<div className="relative w-[100%] h-[500px]">
			<div className="w-full h-[500px]">
				<video
					autoPlay
					loop
					muted
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}>
					<source src="/metal.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="flex px-[20px] md:px-16 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
				<div className="">
					<h1 className="md:text-[54px] text-[30px] text-[#ffffff8f] font-[700] w-full md:w-[760px] md:leading-[70px] leading-[50px] text-center">
						Литые мелющие шары
					</h1>
				</div>
			</div>

			<div
				className="w-[140px] h-full hover:bg-[#ff2828] hover:w-[200px] bg-[#000000cc] absolute flex justify-center items-center right-0 top-0"
				style={{
					transition: "0.5s",
				}}>
				<div className="flex flex-col md:flex-row   justify-center items-center  h-full w-full gap-6">
					{links_products.slice(2, 3).map((el, index) => (
						<Link key={index} className="w-full" href={el.path}>
							<div
								style={{
									transition: "0.5s",
								}}
								className=" bg-transparent w-full   py-6 p-4 ">
								<div className="flex text-start flex-col   items-start justify-center  w-full gap-4">
									<h1 className="text-white w-[150px] mt-4 text-start text-[18px] font-[600] ">
										{el.title}
									</h1>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroCats;
