import img from "@/assets/about.jpg";
import Image from "next/image";

const AboutCast = () => {
	return (
		<div className="">
			<div className="w-full flex ">
				<div className="bg-[#ff2828] flex items-end py-8 px-20 mt-[-40px] justify-end relative w-full">
					<h1 className="text-[18px] flex justify-end   text-[#ffffff] font-[500] w-[600px] p-6 leading-[26px] text-start">
						Наши литые мелющие шары изготавливаются из высокохромистого,
						среднехромистого и низкохромистого чугуна, что позволяет добиться
						оптимального баланса между твердостью, износостойкостью и ударной
						вязкостью. Высокое содержание хрома обеспечивает стойкость к
						абразивному износу, продлевая срок службы шаров даже в самых
						агрессивных условиях эксплуатации. Точная термическая обработка
						гарантирует однородную структуру и стабильные характеристики, что
						делает их надежным выбором для горнодобывающей, цементной и
						энергетической отраслей.
					</h1>
				</div>
				<div className="w-full" />
			</div>
			<div className="w-full flex ">
				<div className="w-full flex justify-end mt-10">
					<div className="w-[640px] p-6">
						<h3 className="text-2xl font-semibold mb-4">Используется в:</h3>
						<ul className="text-lg text-gray-800 space-y-3">
							<li className="flex items-center gap-4">
								<span className="bg-[#ff2828]  w-4 h-1 "></span> Горнодобывающей промышленности
							</li>
							<li className="flex items-center gap-4">
								<span className="bg-[#ff2828]  w-4 h-1 "></span> Цементной промышленности
							</li>
							<li className="flex items-center gap-4">
								<span className="bg-[#ff2828]  w-4 h-1 "></span> Угольной энергетике
							</li>
							<li className="flex items-center gap-4">
								<span className="bg-[#ff2828]  w-4 h-1 "></span> Химической промышленности
							</li>
							<li className="flex items-center gap-4">
								<span className="bg-[#ff2828]  w-4 h-1 "></span> Металлургии
							</li>
						</ul>
					</div>
				</div>
				<div className="  flex items-end   mt-[-150px] justify-start relative w-full">
					<div className="w-[600px] h-[450px] relative">
						<Image fill objectFit="cover" src={img} alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCast;
