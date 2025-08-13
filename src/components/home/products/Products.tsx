"use client";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/img5.jpeg";
import img2 from "@/assets/img3.jpeg";
import img3 from "@/assets/img4.jpeg";
import { Title } from "@/components/ui/text/Title";
import { Button } from "@/components/ui/button/Button";
import { BsHandIndexThumb } from "react-icons/bs";
import ContactRfc from "@/components/contact/contact/ContactRfc";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Products = () => {
	const [modal, setModal] = useState(false);
	const t = useTranslations("Products");
	return (
		<section className="w-full min-h-[100vh] bg-[#dee4e9] py-16">
			<div className="container">
				<div className="w-full flex flex-col justify-center items-center gap-7">
					<TitleComponent>{t("title")}</TitleComponent>
					<Description className="text-center md:w-[80%] w-full">
						{t("desc")}
					</Description>
				</div>

				<div className="w-full py-16">
					<div data-aos="fade-up" className="flex flex-col md:flex-row w-full">
						<div className="w-full md:w-1/2">
							<Image
								src={img1}
								alt="Производство"
								className="rounded-[3px] shadow-lg w-full h-auto object-cover"
							/>
						</div>
						<div className="w-full md:w-1/2 text-[#1b1b1b] bg-white md:p-10 p-4 flex flex-col justify-center text-center items-center gap-2">
							<Title>{t("title2")}</Title>
							<Description>{t("desc2")}</Description>
						</div>
					</div>

					<div
						data-aos="fade-up"
						className="flex flex-col-reverse md:flex-row w-full">
						<div className="w-full md:w-1/2 text-[#1b1b1b] bg-white md:p-10 p-4 flex flex-col justify-center text-center items-center gap-2">
							<Title>{t("title3")}</Title>
							<Description>{t("desc3")}</Description>
						</div>
						<div className="w-full md:w-1/2">
							<Image
								src={img2}
								alt="Производство"
								className="rounded-[3px] shadow-lg w-full h-auto object-cover"
							/>
						</div>
					</div>

					<div data-aos="fade-up" className="flex flex-col md:flex-row w-full">
						<div className="w-full md:w-1/2">
							<Image
								src={img3}
								alt="Производство"
								className="rounded-[3px] shadow-lg w-full h-auto object-cover"
							/>
						</div>
						<div className="w-full md:w-1/2 text-[#1b1b1b] bg-white md:p-10 p-4 flex flex-col justify-center text-center items-center gap-2">
							<Title>{t("title4")}</Title>
							<Description>{t("desc3")}</Description>
						</div>
					</div>
				</div>

				{modal && (
					<div
						className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
						onClick={() => setModal(false)}>
						<div
							className="bg-[#dee4e9] md:p-10 p-4  rounded-lg w-full flex  flex-col justify-center md:w-[500px] relative"
							onClick={(e) => e.stopPropagation()}>
							<div
								onClick={() => setModal(false)}
								className="w-full flex justify-end items-end text-end">
								<IoMdClose size={24} />
							</div>
							<ContactRfc />
						</div>
					</div>
				)}

				<div className="w-full flex justify-center items-center">
					<div className="w-full max-w-[1000px] flex justify-center gap-4 md:text-start text-center md:flex-row flex-col items-center mt-14">
						<Description>{t("desc5")}</Description>
						<Button
							onClick={() => setModal(true)}
							className="  bg-[#eeff00] hover:bg-[#ffd900] text-[#14184d] w-full max-w-[400px] flex justify-center item-center  gap-2">
							<BsHandIndexThumb size={20} /> {""} {t("btn")}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
