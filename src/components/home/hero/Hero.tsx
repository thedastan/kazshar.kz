"use client";
import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import HeroMenu from "./HeroMenu";
import { links_products } from "@/components/navbar/data";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [modal, setModal] = useState(false);

	return (
		<div className="relative w-[100%] h-[100vh]">
			<div className="w-full h-[100vh]">
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

			<div className="flex px-16 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[100vh] justify-end items-start flex-col">
				<div className="">
					<h1 className="text-[54px] text-[#ffffff8f] font-[700] w-[760px] leading-[70px] text-start">
						Сила определяется тем, что за ней скрывается.
					</h1>
					<p className="mt-[20px] text-white text-start leading-8 font-[400] text-[22px] w-[640px]">
						И каждая конструкция надежна настолько, насколько надежны ее
						структура и фундамент.
					</p>
					<div className="flex items-center gap-3">
						<button
							onClick={() => setModal(true)}
							className="text-white  bg-[#ff2828] rounded-[5px] p-3 px-4 font-[400] text-[18px] flex items-center gap-1 mt-10">
							<IoPlay size={32} /> Смотреть полное видео
						</button>
					</div>
				</div>

				<div className="flex h-[200px] ">
					{links_products.map((el, index) => (
						<Link key={index} href={el.path}>
							<div
								style={{
									transition: "0.2s",
								}}
								className=" bg-transparent  hover:bg-[#ff2828] py-6 p-4 ">
								<div className="flex text-start flex-col border-t-2  border-white items-start justify-start  h-[140px] w-[360px] gap-4">
									<h1 className="text-white mt-4 text-start text-[18px] font-[600] ">
										{el.title}
									</h1>
									<p className="text-[#d3d3d3] text-[16px] font-[400] ">
										{el.desc}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div
				className={`absolute   top-0 right-0  z-10 h-full bg-[#ff2828]   ${
					isSidebarOpen ? "w-[300px]" : "w-20"
				}`}
				style={{ transition: "1s" }}
				onMouseEnter={() => setSidebarOpen(true)}
				onMouseLeave={() => setSidebarOpen(false)}>
				<div className="h-full">
					<HeroMenu isSidebarOpen={isSidebarOpen} />
				</div>
			</div>

			{modal && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setModal(false)}>
					<div
						className="bg-[#303030] p-6 rounded-lg w-[1000px] relative"
						onClick={(e) => e.stopPropagation()}>
						<button
							className="absolute top-3 right-3 text-white text-2xl"
							onClick={() => setModal(false)}>
						<IoMdClose />
						</button>
						<video
							autoPlay
							controls
							className="w-full rounded-lg mt-4">
							<source src="/metal.mp4" type="video/mp4" />
							Ваш браузер не поддерживает видео.
						</video>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
