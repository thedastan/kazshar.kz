import React from "react";

const Control = () => {
	const data = [
		{
			num: "01",
			title: "Проверка сырья",
			desc: "все материалы проходят предварительное тестирование на соответствие стандартам.",
		},
		{
			num: "02",
			title: "Контроль на стадии литья и ковки",
			desc: " каждая партия продукции проверяется на дефекты, включая проверку формы, плотности и прочности.",
		},
		{
			num: "03",
			title: "Механическая обработка",
			desc: "изделия подвергаются контрольным измерениям для обеспечения точности и соответствия чертежам.",
		},
		{
			num: "04",
			title: "Финальная проверка",
			desc: "перед упаковкой каждый продукт проходит финальную проверку на соответствие техническим характеристикам, а также тестирование на износостойкость и долговечность.",
		},
		{
			num: "05",
			title: "Анализ и улучшение",
			desc: "проводим регулярные аудиты и анализ результатов контроля для совершенствования процесса и внедрения инновационных методов.",
		},
	];
	return (
		<div className="py-10">
			<div className="container">
				<h1 className="text-[30px] text-center font-[700]">Контроль качеств</h1>
				<div className="grid grid-cols-1 justify-center mt-20 items-start gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
					{data.map((el, index) => (
						<div
							key={index}
							
              style={{
                transition: "0.5s",
              }}
							className="flex group hover:bg-[#ff2828] h-[240px] p-6 justify-start items-center gap-4" >
							<h1
								id="text_bg"
								className="text-[160px] leading-[130px]   font-[900]  ">
								{el.num}
							</h1>
							<div >
								<h2 className="text-[30px] group-hover:text-white leading-[34px] font-[700] text-[#ff2828]">
									{el.title}
								</h2>
								<p className="text-gray-500 mt-2 group-hover:text-white text-[18px]">{el.desc}</p>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center items-center mt-20">
					<p className="text-[18px] w-[600px] text-center  text-[#575757] font-[400] ">
						Наши специалисты используют современное оборудование и высокоточную
						технику для обеспечения строгого соблюдения стандартов качества на
						каждом этапе.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Control;
