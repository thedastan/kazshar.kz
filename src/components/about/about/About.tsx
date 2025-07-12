"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { FiDownload } from "react-icons/fi";

// Импорт изображений
import img1 from "@/assets/about1.jpg";
import img2 from "@/assets/about4.jpg";
import img3 from "@/assets/about3.jpg";
import img4 from "@/assets/photo4.webp";
import img5 from "@/assets/photo17.webp";
import img6 from "@/assets/photo2.webp";
import img7 from "@/assets/photo14.webp";
import img8 from "@/assets/photo8.webp";

import about_bg from "@/assets/about_bg.jpg";
import about_bg_box from "@/assets/about_bg_box.jpg";

// Кнопка загрузки изображений
const DownloadableImage = ({
	src,
	alt,
	heightClass = "h-[400px] min-h-[400px]",
	widthClass = "w-full", // новинка
}: {
	src: StaticImageData | string;
	alt: string;
	heightClass?: string;
	widthClass?: string;
}) => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = typeof src === "string" ? src : src.src;
		link.download = alt;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className={`relative ${widthClass} ${heightClass} group`}>
			<Image fill objectFit="cover" src={src} alt={alt} />
			<button
				className="absolute top-4 right-4 bg-black/70 text-white text-[32px] p-2 rounded-full transition-opacity 
        md:opacity-0 md:group-hover:opacity-100 opacity-100 hover:bg-black"
				onClick={handleDownload}>
				<FiDownload />
			</button>
		</div>
	);
};

const About = () => {
	const t = useTranslations("About");

	// Все секции с чередованием блоков
	const sections = [
		{
			title: t("histori"),
			text: t("histori_description"),
			image: img1,
			reverse: false,
			height: "h-[500px]",
			width: "w-full md:w-[60%]",
		},
		{
			title: t("task"),
			text: t("task_description"),
			image: img2,
			reverse: true,
			height: "h-[350px]",
			width: "w-full md:w-[100%]",
		},
		{
			title: t("text"),
			text: t("desc"),
			image: img4,
			reverse: false,
			height: "h-[450px]",
			width: "w-full md:w-[70%]",
		},
		{
			title: t("text1"),
			text: t("desc1"),
			image: img5,
			reverse: true,
			height: "h-[300px]",
			width: "w-full md:w-[75%]",
		},
		{
			title: t("text2"),
			text: t("desc2"),
			image: img6,
			reverse: false,
			height: "h-[500px]",
			width: "w-full md:w-[60%]",
		},
		{
			title: t("text3"),
			text: t("desc3"),
			image: img7,
			reverse: true,
			height: "h-[400px]",
			width: "w-full md:w-[100%]",
		},
		{
			title: t("text4"),
			text: t("desc4"),
			image: img8,
			reverse: false,
			height: "h-[350px]",
			width: "w-full md:w-[80%]",
		},

		{
			title: "",
			text: t("today_description"),
			image: img3,
			reverse: true,
			height: "h-[350px]",
			width: "w-full md:w-[80%]",
		},
	];

	return (
		<div
			className="  text-white"
			style={{
				backgroundImage: `url(${about_bg.src})`,
				backgroundPosition: "center",
			}}>
			<div className="container mx-auto px-4 py-20 bg-[#1a1a1a]">
				{sections.map(
					({ title, text, image, reverse, height, width }, index) => (
						<div
							key={index}
							style={{
								backgroundImage: `url(${about_bg_box.src})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							data-aos="fade-up"
							className={`flex justify-between border-b shadow-sm border-gray-600 flex-col ${
								reverse ? "md:flex-row-reverse" : "md:flex-row"
							} items-center  `}>
							<div className="w-full bg-[#0707079c] md:bg-transparent py-4 px-2 md:px-6">
								<h2 className="uppercase text-[26px] md:text-[36px] font-bold tracking-wide">
									{title}
								</h2>
								<p className="text-[#dbdbdb] text-[16px] mt-4 leading-relaxed whitespace-pre-line">
									{text}
								</p>
							</div>
							<div
								className={`flex   ${width} ${
									!reverse ? "justify-end" : "justify-start"
								}`}>
								<DownloadableImage
									src={image}
									alt={`section-${index}`}
									heightClass={height}
									widthClass={width}
								/>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default About;
