"use client";
import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import HeroMenu from "./HeroMenu";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Hero = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [modal, setModal] = useState(false);
	const [bgVideoKey, setBgVideoKey] = useState(0);  
	const t = useTranslations("Hero");

	return (
		<>
			<div className="relative w-full h-[700px] md:h-[100vh]">
				<div className="relative w-full h-[700px] md:h-[100vh] overflow-hidden md:py-10">
					{" "}
					<iframe
						key={bgVideoKey}
						className="absolute top-0 left-0 w-full h-full    md:scale-[1.2] scale-[4.9]"
						style={{ objectFit: "cover" }}
						src="https://kinescope.io/embed/8cEfSExVYPMjFiJ1YQiGX6"
						allow="autoplay; muted"
					/>
				</div>

			 
				<div className="flex px-[20px] sm:px-16 bg-[#00000044] gap-[60px] absolute top-0 left-0 w-full h-[700px] md:h-[100vh] justify-end items-start flex-col">
					<div>
						<h1 className="md:text-[54px] text-[26px] text-[#ffffff8f] font-[700] w-full md:w-[760px] leading-[40px] sm:leading-[70px] text-start">
							{t("title")}
						</h1>
						<p className="mt-[20px] text-white text-start leading-8 font-[400] text-[18px] md:text-[22px] w-full sm:w-[640px]">
							{t("description")}
						</p>
					</div>

					<div className="flex mt-20 md:mt-32">
						<div className="flex items-start gap-3">
							<button
								onClick={() => setModal(true)}
								className="text-[18px] items-center gap-2 flex text-[#ffffff8f] font-[700] w-full md:w-[760px] leading-[70px] text-start">
								<IoPlay size={32} /> {t("watching")}
							</button>
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div
					className={`absolute md:block hidden top-0 right-0 z-10 h-full bg-[#000000c0] ${
						isSidebarOpen ? "w-[300px]" : "w-40"
					}`}
					style={{ transition: "1s" }}
					onMouseEnter={() => setSidebarOpen(true)}
					onMouseLeave={() => setSidebarOpen(false)}>
					<div className="h-full">
						<HeroMenu isSidebarOpen={isSidebarOpen} />
					</div>
				</div>

				{/* Modal Video */}
				{modal && (
					<div
						className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
						onClick={() => {
							setModal(false);
							setBgVideoKey((prev) => prev + 1); // 👈 обновить фоновое видео
						}}>
						<div
							className="bg-transparent md:bg-[#303030] w-full md:w-full h-[300px] md:h-[100vh] relative"
							onClick={(e) => e.stopPropagation()}>
							<button
								className="absolute top-3 right-3 text-white z-50 text-2xl"
								onClick={() => {
									setModal(false);
									setBgVideoKey((prev) => prev + 1);
								}}>
								<IoMdClose />
							</button>

							<iframe
								width="100%"
								height="100%"
								src="https://kinescope.io/embed/hYvbnm42uzXVxqKM9xhwLY"
								allow="autoplay"></iframe>
						</div>
					</div>
				)}
			</div>

			{/* Mobile Sidebar */}
			<div className="flex md:hidden">
				<div
					className="bg-[#000000c0] w-full"
					style={{ transition: "1s" }}
					onMouseEnter={() => setSidebarOpen(true)}
					onMouseLeave={() => setSidebarOpen(false)}>
					<div className="h-full">
						<HeroMenu isSidebarOpen={isSidebarOpen} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
