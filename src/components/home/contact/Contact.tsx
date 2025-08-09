import { Button } from "@/components/ui/button/Button";
import { InputComponent } from "@/components/ui/input/InputComponent";
import { TextareaComponent } from "@/components/ui/input/TextareaComponent";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	const t = useTranslations("ContactHome");
	return (
		<section className="w-full min-h-[100vh] py-16 bg-[#dee4e9]">
			<div className="container flex flex-col justify-center items-center gap-10">
				<div className="w-full flex flex-col justify-center gap-8 items-center text-center text-black">
					<TitleComponent>{t("title")}</TitleComponent>
					<Description>
						 {t("desc")}
					</Description>
				</div>

				<div className="w-full max-w-[700px] flex flex-col items-center justify-center gap-6">
					<InputComponent placeholder={t("name")} type="text" />
					<InputComponent placeholder={t("email")} type="text" />
					<InputComponent placeholder={t("phone")} type="number" />
					<TextareaComponent placeholder={t("message")} />
					<Button className="bg-[#4787ff] rounded-sm md:w-[300px] w-full">
						 {t("btn")}
					</Button>
				</div>

				<div className="flex flex-col gap-6">
					<Link
						className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
						href={"tel:+7 771 251 0703"}
						target={"_blank"}>
						<FaPhoneAlt /> +7 771 251 0703
					</Link>

					<Link
						className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
						href={"tel:+7 771 251 0703"}
						target={"_blank"}>
						<FaPhoneAlt /> +7 771 638 0820
					</Link>

					<Link
						className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
						href={"mailto:saleskazshar@gmail.com.com"}
						target={"_blank"}>
						<MdEmail /> saleskazshar@gmail.com.com
					</Link>

					<Link
						className="text-[18px] flex items-center justify-center max-w-[700px] gap-2 text-center font-[400] leading-[140%]"
						href={
							"https://www.google.com/maps/search/%D0%9A%D0%BE%D1%80%D0%B4%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D1%80-%D0%BD,+%D1%81.+%09%09%09%09%09%09%D0%9A%D0%BE%D1%80%D0%B4%D0%B0%D0%B9,+%D1%83%D0%BB.+%D0%91%D0%B5%D1%80%D0%B8%D0%BA%D1%82%D0%B0%D1%81,+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+5./@43.0128914,74.7298227,17.49z?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
						}
						target={"_blank"}>
						 {t("location")}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Contact;
