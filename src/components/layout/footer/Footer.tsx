"use client";
import { Description } from "@/components/ui/text/Description";
import { useSocialNetworks } from "@/lib/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
	const t = useTranslations("Footer");
	const socialNetworks = useSocialNetworks();

	const [showButton, setShowButton] = useState(false);

	// Отслеживаем скролл
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Плавный скролл к началу
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<footer className="bg-[#1b1b1b] py-3">
			<div className=" flex flex-col-reverse gap-3 fixed z-30 right-[40px] bottom-[80px] md:right-[100px] md:bottom-[100px]">
				{socialNetworks.slice(0, 2).map((el, index) => (
					<Link
						key={index}
						href={el.path}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[40px] text-[#2b8cb9]   font-normal"
						style={{ fontSize: "40px" }}>
						{React.cloneElement(el.icon, { size: 42 })}
					</Link>
				))}

				{showButton && (
					<button
						onClick={scrollToTop}
						className="  p-3 rounded-full flex bg-[#2b8cb9] text-white shadow-lg hover:bg-[#1b6c90] transition">
						<FaArrowUp size={20} />
					</button>
				)}
			</div>
			<div className="flex md:flex-row flex-col text-center justify-between container text-white">
				<Description>{t("text1")}</Description>
				<Link href="https://bir.kg" target="_blank">
					<Description>{t("text2")}</Description>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
