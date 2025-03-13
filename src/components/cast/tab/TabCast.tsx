import { links_products } from "@/components/navbar/data";
import Link from "next/link";

const TabCast = () => {
	const data = [
		{
			title: "Высокохромистый чугун",
			description: [
				{
					desc: "C 2,0-3,0",
				},
				{
					desc: "Si ≤0,10",
				},
				{
					desc: "Mn 0,5-1,5",
				},
				{
					desc: "Cr ≤20",
				},
				{
					desc: "P ≤0,10",
				},
				{
					desc: "S ≤0,10",
				},
				{
					desc: "Mo ≤0,10",
				},
				{
					desc: "Cu ≤2,0",
				},
				{
					desc: "Ni ≤1,5",
				},
			],
		},
		{
			title: "Среднехромистый чугун",
			description: [
				{
					desc: "C 2,1-3,1",
				},
				{
					desc: "Si 0,5-2,2",
				},
				{
					desc: "Mn 0,5-1,5",
				},
				{
					desc: "Cr 6-10",
				},
				{
					desc: "P ≤0,10",
				},
				{
					desc: "S ≤0,10",
				},
				{
					desc: "Mo ≤1,0",
				},
				{
					desc: "Cu ≤0,8",
				},
				{
					desc: "Ni ≤1,5",
				},
			],
		},
		{
			title: "Низкохромистый чугун",
			description: [
				{
					desc: "C 2,1-3,6",
				},
				{
					desc: "Si ≤1,2",
				},
				{
					desc: "Mn 0,5-1,5",
				},
				{
					desc: "Cr 1,3",
				},
				{
					desc: "P ≤0,10",
				},
				{
					desc: "S ≤0,10",
				},
				{
					desc: "Mo ≤1,0",
				},
				{
					desc: "Cu ≤0,8",
				},
			],
		},
	];
	return (
		<div className="pt-20">
			<div className="container">
				<h3 className="text-2xl text-center pb-6 font-semibold mb-4">
					Основные характеристики шаров
				</h3>
				<div className="flex gap-6 justify-between">
					<div className="relative group w-full">
						<div className="  group cursor-pointer bg-[#ff2828] text-center p-4 w-full text-[#ffffff] font-[500] text-[18px]">
							Доступные размеры
						</div>
						<div className="w-full overflow-hidden h-[200px] relative">
							<ul
								style={{
									transition: "0.3s",
								}}
								className="absolute bg-gray-100 p-4 pt-8 mt-[-200px] w-full  group-hover:mt-0 flex flex-col gap-2">
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Номинальный диаметр 20 - 70 мм
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Допуск на диаметр +3, -3
								</li>
							</ul>
						</div>
					</div>

					<div className="relative group w-full">
						<div className=" group cursor-pointer bg-[#ff2828] text-center p-4   w-full text-[#ffffff] font-[500] text-[18px]">
							Механические характеристики
						</div>
						<div className="w-full overflow-hidden h-[200px] relative">
							<ul
								style={{
									transition: "0.3s",
								}}
								className="absolute bg-gray-100 pt-8 p-4 mt-[-200px] w-full  group-hover:mt-0 flex flex-col gap-2">
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Твердость поверхности 45 - 58
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Ударная вязкость (Дж/см2) ≥12
								</li>
							</ul>
						</div>
					</div>

					<div className="relative group w-full pb-6">
						<div className="cursor-pointer bg-[#ff2828] text-center p-4 w-full text-[#ffffff] font-[500] text-[18px]">
							Химический состав
						</div>

						<div className="w-full flex ">
							{data.map((el, index) => (
								<div key={index} className="w-full flex overflow-hidden">
									<ul
										style={{ transition: "0.3s" }}
										className="bg-gray-100 flex flex-col p-4 pt-8 mt-[-600px] w-full  group-hover:mt-0 gap-2">
										<h1 className="text-[16px] font-[700] border-b-2 pb-2 border-[#b3b3b3]">{el.title}</h1>
										{el.description.map((item, idx) => (
											<li
												key={idx}
												className="flex items-center gap-4 text-gray-800">
												<span className="bg-[#ff2828] w-4 h-1"></span>
												{item.desc}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="py-10 bg-[#1d1d1d]">
				<div className="container">
					<div className="flex h-[200px] w-full gap-6">
					{links_products.slice(0, 3).filter((_, index) => index !== 1).map((el, index)  => (
							<Link key={index} className="w-full" href={el.path}>
								<div
									style={{
										transition: "0.5s",
									}}
									className=" bg-transparent w-full hover:bg-[#ff2828] py-6 p-4 ">
									<div className="flex text-start flex-col border-t-2  border-white items-start justify-start  h-[140px] w-full gap-4">
										<h1 className="text-white mt-4 text-start text-[18px] font-[600] ">
											{el.title}
										</h1>
										<p className="text-[#d3d3d3] text-[16px] font-[400] ">
											{el.desc}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabCast;
