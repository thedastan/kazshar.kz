"use client";
import ContactRfc from "@/components/contact/contact/ContactRfc";
import { Button } from "@/components/ui/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {  IoMdClose } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";

const Tabforged = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие по клику
	};
	const [modal, setModal] = useState(false);
	const t = useTranslations("Forget");

	const data = [
		{
			title: t("tab"),
			descs: [
				{
					desc: t("tab_des"),
				},
				{
					desc: t("tab_des2"),
				},
			],
		},
		{
			title: t("tab2"),
			descs: [
				{
					desc: t("tab2_des"),
				},
				{
					desc: t("tab2_des2"),
				},
			],
		},
		{
			title: t("tab3"),
			descs: [
				{
					desc: "C 0,47-0,55",
				},
				{
					desc: "Si 0,17-0,37",
				},
				{
					desc: "Mn 0,5-0,8",
				},
				{
					desc: "Ni ≤0,25",
				},
				{
					desc: "S≤0,035",
				},
				{
					desc: "P≤0,035",
				},
				{
					desc: "Cr≤0,25",
				},
				{
					desc: "Cu≤0,25",
				},
				{
					desc: "As≤0,08",
				},
				{
					desc: "Fe~97",
				},
			],
		},
	];
	return (
		<div className="pt-20 bg-[#86B3D1]">
			<div className="container">
				<div className="flex flex-col pb-6  justify-center items-center">
					<h3 className="text-2xl text-center text-white  font-semibold mb-4">
						{t("haracter")}
					</h3>

					<Link
						target={"_blank"}
						href={
							"/Доступные_размеры_и_механические_характеристики_мелющих_шаров.pdf"
						}>
						<Button className=" rounded-sm w-full flex items-center gap-2">
							{t("pdf")} <IoDownloadOutline />
						</Button>
					</Link>
				</div>
			</div>

			<div className="md:flex hidden  gap-6 justify-between">
				<div className="py-20 w-full">
					<div className="w-full flex  relative">
						<div className="bg-[#4D6D9A] w-full py-20 px-10">
							{data.map((el, index) => (
								<div
									key={index}
									className="group flex justify-end items-end"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}>
									<div className="cursor-pointer  text-center p-4 h-[60px] group-hover:text-black w-[500px] text-[#727272] font-[500] text-[18px]">
										<h1 className="text-[22px] text-white font-[700] text-start">
											{el.title}
										</h1>
									</div>
								</div>
							))}
						</div>

						<div className=" relative flex  h-[400px]    flex-col w-full">
							{data.map((el, index) => (
								<div
									key={index}
									className="flex w-full relative justify-start  items-center"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}>
									<div
										className="flex justify-center px-20 flex-col items-start    absolute top-0 h-[400px] transition-opacity duration-1000 ease-in-out transform "
										style={{
											opacity: hoveredIndex === index ? 1 : 0,
											fontSize: hoveredIndex === index ? "18px" : "0px",
											transition: "0.5s",
										}}>
										{el.descs.map((desc, idx) => (
											<p key={idx} className="  font-[400] text-white  text-start">
												{desc.desc}
											</p>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex md:hidden">
				<div className="flex flex-col w-full max-w-lg mx-auto mt-10">
					{data.map((el, index) => (
						<div
							key={index}
							className="py-4 px-6 transition-all duration-300 bg-[#4D6D9A]">
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleClick(index)}>
								<h1
									className={`text-lg font-bold ${
										activeIndex === index ? "text-white" : "text-white"
									}`}>
									{el.title}
								</h1>
								<FaChevronDown
									className={`transition-transform text-white duration-300 ${
										activeIndex === index ? "rotate-180" : "rotate-0"
									}`}
								/>
							</div>

							<div
								className={`transition-all duration-500 ease-in-out overflow-hidden`}
								style={{
									maxHeight: activeIndex === index ? "500px" : "0px",
									opacity: activeIndex === index ? 1 : 0,
									transition:
										"max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
								}}>
								<div className="mt-2">
									{el.descs.map((desc, idx) => (
										<p key={idx} className="text-sm text-white">
											{desc.desc}
										</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div
				className="fixed bottom-[10px] left-1/2 z-50 "
				style={{ transform: "translateX(-50%)" }}>
				<button
					onClick={() => setModal(true)}
					className="text-nowrap"
					style={{
						backgroundColor: "black",
						color: "white",
						padding: "10px 20px",
						borderRadius: "8px",
						animation: "flashColor 1s infinite",
						transition: "background-color 0.3s",
					}}>
					{t("zapros")}
				</button>

				<style>
					{`
			@keyframes flashColor {
				0%, 100% { background-color: black; color: white; }
				50% { background-color: yellow; color: black; }
			}
		`}
				</style>
			</div>

			{modal && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setModal(false)}>
					<div
						className="bg-[#dee4e9] md:p-10 p-4  rounded-lg w-full flex  flex-col justify-center md:w-[500px] relative"
						onClick={(e) => e.stopPropagation()}>
						<div onClick={() => setModal(false)} className="w-full flex justify-end items-end text-end">
							<IoMdClose size={24} />
						</div>
						<ContactRfc />
					</div>
				</div>
			)}
		</div>
	);
};

export default Tabforged;
