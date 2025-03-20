import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";

import Image from "next/image";

const About = () => {
	return (
		<div>
			<div className="container">
				<div className=" pb-20 md:pb-0 py-0 md:py-20">
					<div className="flex md:flex-row flex-col">
						<div className="w-full flex justify-center items-center h-[500px]  ">
							<div className="md:p-14 p-0">
								<h1 className="md:text-[30px] text-[20px] font-[700]">
									История нашего завода
								</h1>
								<div className="flex items-center mt-4 gap-4">
									<div className="w-4 md:h-[220px]  md:flex hidden h-[320px] bg-[#ff2828]" />
									<p className="text-[18px] text-[#575757] font-[400] ">
										Наш завод был основан в 2024 году с целью создания
										высококачественной продукции для металлургической и
										горнодобывающей отраслей. Мы начали свой путь как небольшое
										предприятие, но благодаря внедрению современных технологий и
										профессионализму нашей команды, смогли стать одним из
										ведущих производителей мелющих шаров в Казахстане.
									</p>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className=" relative w-full h-[300px] md:h-[500px]">
							<Image fill objectFit="cover" src={img1} alt="img" />
						</div>
					</div>
					<div className="flex md:flex-row flex-col-reverse">
						<div data-aos="fade-up" className=" relative w-full h-[300px] md:h-[500px]">
							<Image  fill objectFit="cover" src={img2} alt="img" />
						</div>
						<div className="w-full flex justify-center items-center h-[500px]  ">
							<div className="md:p-14 p-0">
								<h1 className="md:text-[30px] text-[20px]  font-[700]">О нашей задаче</h1>
								<div className="flex items-center mt-4 gap-4">
									<div className="w-4 md:flex hidden md:h-[220px] h-[220px] bg-[#ff2828]" />
									<p className="text-[18px] text-[#575757] font-[400] ">
										С самого начала мы поставили перед собой задачу обеспечить
										рынок качественной продукцией, соответствующей мировым
										стандартам. В процессе развития мы значительно расширили
										производственные мощности, внедрили инновационные решения в
										процессе литья и ковки, а также обеспечили полный цикл
										производства — от поступления сырья до упаковки готовой
										продукции.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-[#1d1d1d] py-20">
				<div className="container">
					<div className="md:flex block gap-6 items-center">
						<div id="abouts" className="   relative w-full md:w-[70%] md:h-[400px] h-[300px] overflow-hidden rounded-[4px]">
							{/* <Image fill objectFit="cover" src={img1} alt="img" /> */}
						</div>
						<div className="w-full flex flex-col gap-4">
							<h1 className="md:text-[40px] mt-4 md:mt-0 text-[26px]  font-[700] text-white">Сегодня</h1>
							<h4 className="text-[18px]  font-[500] text-white">
								Сегодня наш завод оснащен современным оборудованием и
								высокотехнологичными производственными линиями. Мы гордимся
								своей репутацией надежного партнера для предприятий как в
								Казахстане, так и за его пределами. Наши изделия востребованы на
								различных рынках, и мы продолжаем стремиться к постоянному
								совершенствованию, чтобы удовлетворить требования самых
								требовательных клиентов.
							</h4>
							<p className="text-[18px]  font-[500] text-white">
								Мы уверены, что будущее нашего завода — это инновации, качество
								и долгосрочные партнерские отношения.
							</p>

							<p className="text-[18px]  font-[500] text-white">
								{" "}
								<span className="text-[18px] font-[600]">
									Производственные мощности:
								</span>{" "}
								До 80 000 тонн в год
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
