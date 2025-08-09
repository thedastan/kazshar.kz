import Image from "next/image";
import img from "@/assets/img1.jpeg";
import { useTranslations } from "next-intl";

const About = () => {
	const t = useTranslations("About");
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

					<h3 data-aos="fade-up" className="text-xl font-semibold">
						{t("key")}
					</h3>
					<div className="list-disc list-inside text-lg space-y-2">
						<p data-aos="fade-up">{t("desc1")}</p>
						<p data-aos="fade-up">{t("desc2")}</p>
						<p data-aos="fade-up">{t("desc3")}</p>
						<p data-aos="fade-up">{t("desc4")}</p>
					</div>
					<h3 data-aos="fade-up" className="text-xl font-semibold">
						{t("geo")}
					</h3>
					<p data-aos="fade-up" className="text-lg">
						{t("desc5")}
					</p>

					<p data-aos="fade-up" className="text-lg font-medium">
						 {t("desc6")}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
