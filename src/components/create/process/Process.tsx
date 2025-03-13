import React from "react";

const Process = () => {
	const data = [
		{
			num: "01",
			title: "Подготовка сырья",
			desc: " поступление и проверка материалов, необходимых для производства.",
		},
		{
			num: "02",
			title: "Литье и ковка",
			desc: " изготавливаются основные компоненты, такие как мелющие шары, детали для экскаваторов и конусы для дробилки.",
		},
		{
			num: "03",
			title: "Обработка",
			desc: "детали проходят механическую обработку, включая фрезерование, токарные работы и шлифовку.",
		},
		{
			num: "04",
			title: "Сборка",
			desc: " производится окончательная сборка всех элементов в готовые изделия.",
		},
		{
			num: "05",
			title: "Контроль качества",
			desc: "на каждом этапе осуществляется строгий контроль качества для обеспечения высокого стандарта продукции.",
		},
		{
			num: "06",
			title: "Упаковка и отгрузка",
			desc: "готовая продукция упаковывается и готовится к доставке клиентам.",
		},
	];
	return (
		<div className="py-10">
			<div className="container">
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="text-[30px] text-center font-[700]">
						Производственный процесс
					</h1>
					<p className="text-[18px] w-[600px] text-center text-[#575757] font-[400] ">
						Наш завод использует передовые технологии для производства
						высококачественных изделий. Процесс включает несколько ключевых
						этапов:
					</p>
				</div>
				<div className="grid grid-cols-1 mt-20 justify-start items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{data.map((el, index) => (
						<div
							key={index}
							
              style={{
                transition: "0.5s",
              }}
							className="flex group hover:bg-[#ff2828] p-6 h-[320px]  flex-col justify-start items-start gap-4">
							<h1 id="text_bg" className="text-[160px] leading-[130px]   font-[900]  ">
								{el.num}
							</h1>
							<div className="">
								<h2 className="text-[30px]  group-hover:text-white font-[700] text-[#ff2828]">
									{el.title}
								</h2>
								<p className="text-gray-500 group-hover:text-white text-[18px]">{el.desc}</p>
							</div>
						</div>
					))}
				</div>
			 <div className="flex justify-center items-center mt-20">
       <p className="text-[18px] w-[600px] text-center  text-[#575757] font-[400] ">
					Процесс ориентирован на эффективность и высокое качество, что
					позволяет нам удовлетворять требования самых требовательных клиентов.
				</p>
       </div>
			</div>
		</div>
	);
};

export default Process;
