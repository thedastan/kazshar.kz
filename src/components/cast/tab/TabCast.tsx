"use client";
import { links_products } from "@/components/navbar/data";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

const Tabforged = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие по клику
	};

	const data = [
		{
			title: "Доступные размеры",
			description: [
				{
					name: "",
					descs: [
						{
							desc: "Номинальный диаметр 20 - 70 мм",
						},
						{
							desc: "Допуск на диаметр +3, -3",
						},
					],
				},
			],
		},
		{
			title: "Механические характеристики",
			description: [
				{
					name: "",
					descs: [
						{
							desc: "Твердость поверхности 45 - 58",
						},
						{
							desc: "Ударная вязкость (Дж/см2) ≥12",
						},
					],
				},
			],
		},
		{
			title: "Химический состав",
			description: [
				{
					name: "Высокохромистый чугун",
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
					name: "Среднехромистый чугун",
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
					name: "Низкохромистый чугун",
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
		<div className="pt-20 bg-slate-100">
			<div className="container">
				<div className="flex flex-col pb-6  justify-center items-center">
					<h3 className="text-2xl text-center   font-semibold mb-4">
						Основные характеристики шаров
					</h3>

					<button className="bg-[#1d1d1d] flex items-center gap-2 rounded-[2px] text-white text-[16px] py-2  px-6 ">
						Скачать PDF <IoDownloadOutline />
					</button>
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

						<div className=" relative flex flex-col   w-full">
							{data.map((el, index) => (
								<div
									key={index}
									className="flex w-full relative justify-start items-center"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}>
									<div
										className="w-full absolute p-6 right-0 top-0 gap-2 flex  justify-start items-start px-20 transition-opacity duration-1000 ease-in-out transform"
										style={{
											opacity: hoveredIndex === index ? 1 : 0,
										}}>
										{el.description.map((item, idx) => (
											<div key={idx} className="flex flex-col gap-2">
												<h1 className="font-[600] pb-2 ">{item.name}</h1>
												{item.descs.map((desc, idx) => (
													<p
														key={idx}
														className="text-[18px] font-[400] text-start">
														{desc.desc}
													</p>
												))}
											</div>
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
			<div className="py-10 bg-[#1d1d1d]">
				<div className="container">
					<div className="flex flex-col md:flex-row md:h-[200px] h-full w-full gap-6">
						{links_products
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
		</div>
	);
};

export default Tabforged;
