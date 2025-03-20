"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img1.jpg";
import img5 from "@/assets/img2.jpg";
import img6 from "@/assets/img3.jpg";

const News = () => {
	const [modal, setModal] = useState<number | null>(null);

	const data = [
		{
			id: 1,
			img: img1,
			title: "Рост цен на металлопродукцию в Марте",
			desc: "Аналитики прогнозируют увеличение цен на сталь и алюминий в связи с ростом спроса на мировом рынке.",
			date: "12 марта 2025",
		},
		{
			id: 2,
			img: img2,
			title: "Новые технологии в производстве стали",
			desc: "Металлургические компании внедряют инновационные методы переработки сырья для повышения качества продукции.",
			date: "10 марта 2025",
		},
		{
			id: 3,
			img: img3,
			title: "Россия увеличивает экспорт",
			desc: "Экспортные поставки российской металлопродукции выросли на 15% в первом квартале 2025 года.",
			date: "8 марта 2025",
		},
		{
			id: 4,
			img: img4,
			title: "Рост цен на металлопродукцию в Марте",
			desc: "Аналитики прогнозируют увеличение цен на сталь и алюминий в связи с ростом спроса на мировом рынке.",
			date: "12 марта 2025",
		},
		{
			id: 5,
			img: img5,
			title: "Новые технологии в производстве стали",
			desc: "Металлургические компании внедряют инновационные методы переработки сырья для повышения качества продукции.",
			date: "10 марта 2025",
		},
		{
			id: 6,
			img: img6,
			title: "Россия увеличивает экспорт",
			desc: "Экспортные поставки российской металлопродукции выросли на 15% в первом квартале 2025 года.",
			date: "8 марта 2025",
		},
	];

	const item = data.find((el) => el.id === modal);

	return (
		<div className="py-10 bg-[#1d1d1d] relative">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{data.map((el, index) => (
						<div
							key={el.id}
							data-aos="fade-up"
							data-aos-delay={index * 200}
							className="w-full relative flex flex-col justify-start items-center">
							<div className="w-full h-[300px] relative">
								<Image fill objectFit="cover" src={el.img} alt="img" />
							</div>
							<h1 className="font-[600] w-full mt-4 text-[18px] text-start text-[#ffffff]">
								{el.title}
							</h1>
							<p className="font-[400] w-full pb-16 text-[18px] text-start mt-4 text-[#aaaaaa]">
								{el.desc.length > 100 ? `${el.desc.slice(0, 100)}...` : el.desc}
							</p>

							<div className="flex mt-10 absolute bottom-0 w-full justify-between items-center">
								<button
									onClick={() => setModal(el.id)}
									className="text-white bg-[#ff2828] rounded-[5px] py-2 px-4 font-[400] text-[18px] flex items-center gap-1">
									подробнее
								</button>
								<p className="font-[400] text-[18px] text-end text-[#c5c5c5]">
									{el.date}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{item && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setModal(null)}>
					<div
						className="bg-[#303030] p-6 rounded-lg w-full  md:w-[800px] relative"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex md:flex-row flex-col gap-4">
							<div className="w-full h-[300px] relative overflow-hidden rounded-[10px]">
								<Image fill objectFit="cover" src={item.img} alt="img" />
							</div>
							<div className="w-full relative">
								<h1 className="font-[600] w-full mt-4 text-[18px] text-start text-[#ffffff]">
									{item.title}
								</h1>
								<p className="font-[400] w-full pb-16 text-[18px] text-start mt-4 text-[#aaaaaa]">
									{item.desc}
								</p>
								<div className="flex mt-10 absolute bottom-0 w-full justify-between items-center">
									<p className="font-[400] text-[18px] text-end text-[#c5c5c5]">
										{item.date}
									</p>
									<button
										onClick={() => setModal(null)}
										className="text-white cursor-pointer bg-[#ff2828] rounded-[5px] py-2 px-4 font-[400] text-[18px] flex items-center gap-1">
										закрыть
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default News;
