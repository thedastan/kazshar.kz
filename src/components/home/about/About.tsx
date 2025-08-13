"use client";
import Image from "next/image";
import img from "@/assets/img1.jpeg";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";

const About = () => {
	const t = useTranslations("About");

	const [isModal, setIsModal] = useState(false);
	return (
		<section id="about" className="w-full bg-white py-16">
			<div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
				{/* Левая часть — Фото */}
				<div className="w-full md:w-1/2">
					<div className="sticky top-4">
						<Image
							src={img}
							alt="Производство"
							className="rounded-[3px] shadow-lg w-full h-auto object-cover"
						/>
					</div>
				</div>

				{/* Правая часть — Текст */}
				<div className="w-full md:w-1/2 text-[#1b1b1b] space-y-6">
					<h2 data-aos="fade-up" className="text-3xl font-bold">
						{t("title")}
					</h2>
					<p data-aos="fade-up" className="text-lg">
						{t("desc")}
					</p>

					<Button onClick={() => setIsModal(true)}>{t("riding")}</Button>
				</div>
			</div>

			{isModal && (
				<div onClick={() => setIsModal(false)} className=" fixed inset-0 z-50 w-full flex justify-center items-center h-[100vh] top-0 left-0 bg-[#00000077]">
					<div onClick={(e) =>  e.stopPropagation()} className="w-full max-w-[600px] h-[80vh] flex flex-col gap-4 overflow-y-auto bg-white p-5 rounded-md">
						<h2 className="text-3xl font-bold">
							{t("title")}
						</h2>
						<p className="text-lg">
							{t("desc")}
						</p>

						<h3 className="text-xl mt-6 font-semibold">
							{t("key")}
						</h3>
						<div className="list-disc list-inside text-lg space-y-2">
							<p>{t("desc1")}</p>
							<p>{t("desc2")}</p>
							<p>{t("desc3")}</p>
							<p>{t("desc4")}</p>
						</div>
						<h3 className="text-xl mt-6 font-semibold">
							{t("geo")}
						</h3>
						<p className="text-lg">
							{t("desc5")}
						</p>

						<p className="text-lg font-medium">
							{t("desc6")}
						</p>
						<div className="w-full flex justify-end">
							<Button onClick={() => setIsModal(false)} className="bg-red-500 hover:bg-red-600">{t("close")}</Button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default About;
