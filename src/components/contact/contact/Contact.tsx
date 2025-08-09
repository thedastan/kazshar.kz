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
			<div className="flex flex-col md:flex-row  md:items-none h-full   ">
				<div className="bg-[#29648A] h-[100%] px-4 py-4 gap-4 md:h-auto w-full md:w-[550px] flex flex-col md:items-start items-center justify-center md:flex-col">
					<h1 className="text-[22px] md:text-[26px] font-semibold text-white text-center md:text-center w-full">
						{t("contact_title")}
					</h1>

					<ContactFeedback />

					{/* Contact Info */}
					<div className="flex flex-col gap-4 text-white text-sm">
						<Link
							href="mailto:saleskazshar@gmail.com"
							className="flex items-center gap-2"
							target="_blank">
							<MdOutlineMailOutline size={16} />
							saleskazshar@gmail.com
						</Link>

						<Link
							href="tel:+77712510703"
							className="flex items-center gap-2"
							target="_blank">
							<FiPhone size={16} />
							+7 771 251 0703
						</Link>

						<Link
							href="https://wa.me/77716380820"
							className="flex items-center gap-2"
							target="_blank">
							<FaWhatsapp size={16} />
							+7 771 638 0820
						</Link>

						<div className="flex items-center gap-2">
							<FiMapPin size={30} />
							<span>{t("address")}</span>
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
