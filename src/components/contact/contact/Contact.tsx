"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
// import ContactRfc from "./ContactRfc";
import ContactFeedback from "./ContactFeedback";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Contact = () => {
	const t = useTranslations("Contact");

	return (
		<div>
			<div className="flex flex-col md:flex-row  md:items-none h-full md:h-[100%] ">
				<div className="bg-[rgb(199,18,18)] h-[100%] px-10 py-4 gap-4 md:h-[100vh] flex flex-col md:items-start items-center justify-center md:flex-col">
					<div className="bg-[rgb(199,18,18)]     w-[100%]   flex flex-col items-center">
						<div className="w-[100%] flex md:justify-start justify-center mt-[100px] md:mt-[80px]">
							<h1 className="text-[22px] md:text-[26px] font-[600] text-white">
								{t("contact_title")}
							</h1>
						</div>

						<div className="py-[10px]  w-full">
							<div className="flex  justify-center items-center w-full">
								<ContactFeedback />
							</div>
						</div>
					</div>

					<div className="bg-[rgb(199,18,18)] md:max-w-[310px] max-w-[100%] flex flex-col items-center">
						<div className="flex items-start justify-start flex-col gap-2 w-full">
							<div className="flex gap-2 text-white">
								<h1 className="text-[22px]">
									<MdOutlineMailOutline />
								</h1>
								<div>
									<Link href="mailto:saleskazshar@gmail.com" target={"_blank"}>
										<h1 className="text-[12px]">saleskazshar@gmail.com</h1>
									</Link>
								</div>
							</div>

							<div className="flex gap-2 text-white">
								<h1 className="text-[18px]">
									<FiPhone />
								</h1>
								<div>
									<Link href="tel:+77712510703" target={"_blank"}>
										<h1 className="text-[12px]">+7 771 251 0703</h1>
									</Link>
								</div>
							</div>

							<div className="flex gap-2 text-white">
								<h1 className="text-[18px]">
									<FaWhatsapp />
								</h1>
								<div>
									<Link
										target={"_blank"}
										href="https://wa.me/77716380820"
										passHref>
										<h1 className="text-[12px]">+7 771 638 0820</h1>
									</Link>
								</div>
							</div>

							<div className="flex gap-2 text-white">
								<h1 className="text-[18px]">
									<FiMapPin />
								</h1>
								<div>
									<h1 className="text-[12px]">{t("address")}</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[100%] hidden md:block h-[500px] md:h-[100vh]">
					 
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2917.332719010521!2d74.73030952801088!3d43.01338348521646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDAwJzQ4LjAiTiA3NMKwNDMnNTAuOCJF!5e0!3m2!1sru!2skg!4v1745839805783!5m2!1sru!2skg"
						className="w-[100%] h-[100%]"
						loading="lazy"></iframe>
				</div>
				<div className="w-[100%] h-[500px] md:hidden block md:h-[100vh]">
					 

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2917.332719010521!2d74.73030952801088!3d43.01338348521646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDAwJzQ4LjAiTiA3NMKwNDMnNTAuOCJF!5e0!3m2!1sru!2skg!4v1745839805783!5m2!1sru!2skg"
						className="w-[100%] h-[100%]"
						loading="lazy"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
