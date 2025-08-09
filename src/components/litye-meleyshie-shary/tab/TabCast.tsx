"use client";
import ContactRfc from "@/components/contact/contact/ContactRfc";
import { Button } from "@/components/ui/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";

const TabCast = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие по клику
	};

	const t = useTranslations("Cast");
	const [modal, setModal] = useState(false);

	const data = [
		{
			title: t("tab"),
			description: [
				{
					name: "",
					descs: [
						{
							desc: t("tab_des"),
						},
						{
							desc: t("tab_des2"),
						},
					],
				},
			],
		},
		{
			title: t("tab2"),
			description: [
				{
					name: "",
					descs: [
						{
							desc: t("tab2_des"),
						},
						{
							desc: t("tab2_des2"),
						},
					],
				},
			],
		},
		{
			title: t("tab3"),
			description: [
				{
					name: t("tab3_des"),
					descs: [
						{
							desc: "C 2,0-3,0",
						},
						{
							desc: "Si ≤0,10",
						},
						{
							desc: "Mn 0,5-1,5",
						},
						{
							desc: "Cr ≤20",
						},
						{
							desc: "P ≤0,10",
						},
						{
							desc: "S ≤0,10",
						},
						{
							desc: "Mo ≤0,10",
						},
						{
							desc: "Cu ≤2,0",
						},
						{
							desc: "Ni ≤1,5",
						},
					],
				},
				{
					name: t("tab3_des2"),
					descs: [
						{
							desc: "C 2,1-3,1",
						},
						{
							desc: "Si 0,5-2,2",
						},
						{
							desc: "Mn 0,5-1,5",
						},
						{
							desc: "Cr 6-10",
						},
						{
							desc: "P ≤0,10",
						},
						{
							desc: "S ≤0,10",
						},
						{
							desc: "Mo ≤1,0",
						},
						{
							desc: "Cu ≤0,8",
						},
						{
							desc: "Ni ≤1,5",
						},
					],
				},
				{
					name: t("tab3_des3"),
					descs: [
						{
							desc: "C 2,1-3,6",
						},
						{
							desc: "Si ≤1,2",
						},
						{
							desc: "Mn 0,5-1,5",
						},
						{
							desc: "Cr 1,3",
						},
						{
							desc: "P ≤0,10",
						},
						{
							desc: "S ≤0,10",
						},
						{
							desc: "Mo ≤1,0",
						},
						{
							desc: "Cu ≤0,8",
						},
					],
				},
			],
		},
	];
	return (
		<div className="pt-20 bg-[#dee4e9]">
			<div className="container">
				<div className="flex flex-col pb-6  justify-center items-center">
					<h3 className="text-2xl text-center   font-semibold mb-4">
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
						<div className="bg-white w-full py-32 px-10">
							{data.map((el, index) => (
								<div
									key={index}
									className="group flex justify-end items-end"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}>
									<div className="cursor-pointer  text-center p-4 h-[60px] group-hover:text-black w-[500px] text-[#727272] font-[500] text-[18px]">
										<h1 className="text-[22px] font-[700] text-start">
											{el.title}
										</h1>
									</div>
								</div>
							))}
						</div>

						<div className=" relative flex flex-col  h-[400px]   w-full">
							{data.map((el, index) => (
								<div
									key={index}
									className="flex w-full relative justify-start items-center"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}>
									<div
										className="flex justify-center px-20 flex-col items-start    absolute top-0 h-[400px] transition-opacity duration-1000 ease-in-out transform "
										style={{
											opacity: hoveredIndex === index ? 1 : 0,
											fontSize: hoveredIndex === index ? "18px" : "0px",
											transition: "0.5s",
										}}>
										<div className="flex gap-2">
											{el.description.map((item, idx) => (
												<div key={idx} className="flex flex-col gap-2">
													<h1 className="font-[600] pb-2 ">{item.name}</h1>
													{item.descs.map((desc, idx) => (
														<p key={idx} className=" font-[400] text-start">
															{desc.desc}
														</p>
													))}
												</div>
											))}
										</div>
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
							className="py-4 px-6 transition-all duration-300 bg-white ">
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleClick(index)}>
								<h1
									className={`text-lg font-bold ${
										activeIndex === index ? "text-[#2b8cb9]" : "text-[#000000]"
									}`}>
									{el.title}
								</h1>
								<FaChevronDown
									className={`transition-transform duration-300 ${
										activeIndex === index ? "rotate-180" : "rotate-0"
									}`}
								/>
							</div>

							<div
								className={`transition-all duration-500 ease-in-out overflow-hidden`}
								style={{
									maxHeight: activeIndex === index ? "100%" : "0px",
									opacity: activeIndex === index ? 1 : 0,
									transition:
										"max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
								}}>
								<div className="mt-2 gap-2">
									{el.description.map((item, idx) => (
										<div key={idx} className="flex flex-col">
											<p className="font-[600] pb-4 mt-4">{item.name}</p>
											{item.descs.map((desc, idx) => (
												<p key={idx} className="text-sm text-gray-600">
													{desc.desc}
												</p>
											))}
										</div>
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

export default TabCast;
