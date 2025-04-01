"use client";
import ContactRfc from "@/components/contact/contact/ContactRfc";
import { getLinksProducts } from "@/components/navbar/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

const TabRolled = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие по клику
	};

	const language = useTranslations("HeroMenu");
	const t = useTranslations("Rolled");
	const links = getLinksProducts(language);
	const [modal, setModal] = useState(false);

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
					desc: "	C 0,47-0,55",
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
		<div className="pt-20 bg-slate-100">
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
						<button className="bg-[#1d1d1d] flex items-center gap-2 rounded-[2px] text-white text-[16px] py-2  px-6 ">
							{t("pdf")} <IoDownloadOutline />
						</button>
					</Link>
				</div>
			</div>
			<div className="md:flex hidden  gap-6 justify-between">
				<div className="py-20 w-full">
					<div className="w-full flex  relative">
						<div className="bg-white w-full py-20 px-10">
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

						<div className=" relative flex flex-col  h-[400px]  w-full">
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
										{el.descs.map((desc, idx) => (
											<p key={idx} className=" font-[400] text-start">
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
							className="py-4 px-6 transition-all duration-300 bg-white ">
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleClick(index)}>
								<h1
									className={`text-lg font-bold ${
										activeIndex === index ? "text-[#f13c3c]" : "text-[#000000]"
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
									maxHeight: activeIndex === index ? "500px" : "0px",
									opacity: activeIndex === index ? 1 : 0,
									transition:
										"max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
								}}>
								<div className="mt-2">
									{el.descs.map((desc, idx) => (
										<p key={idx} className="text-sm text-gray-600">
											{desc.desc}
										</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-center">
				<button
					onClick={() => setModal(true)}
					className="bg-black text-white px-[20px] py-[10px]">
					{t("zapros")}
				</button>
			</div>

			<div className="py-10 bg-[#1d1d1d] mt-[70px]">
				<div className="container">
					<div className="flex flex-col md:flex-row md:h-[200px] h-full w-full gap-6">
						{links
							.slice(0, 3)
							.filter((_, index) => index !== 1)
							.map((el, index) => (
								<Link key={index} className="w-full" href={el.path}>
									<div
										style={{
											transition: "0.5s",
										}}
										className=" bg-transparent w-full hover:bg-[#ff2828] py-6 p-4 ">
										<div className="flex text-start flex-col border-t-2  border-white items-start justify-start  h-[140px] w-full gap-4">
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
			</div>
			{modal && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setModal(false)}>
					<div
						className="bg-[#c71212] p-10   rounded-lg w-full flex  justify-center md:w-[500px] relative"
						onClick={(e) => e.stopPropagation()}>
						<ContactRfc />
					</div>
				</div>
			)}
		</div>
	);
};

export default TabRolled;
