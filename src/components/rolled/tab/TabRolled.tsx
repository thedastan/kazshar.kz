import { links_products } from "@/components/navbar/data";
import Link from "next/link";

const TabRolled = () => {
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
									Номинальный диаметр 20 - 40 мм
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Допуск на диаметр +2, -1
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
									Твердость поверхности 60-67
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Ударная вязкость (Дж/см2) ≥12
								</li>
							</ul>
						</div>
					</div>

					<div className="relative group w-full">
						<div className="  group cursor-pointer bg-[#ff2828] text-center p-4 w-full text-[#ffffff] font-[500] text-[18px]">
							Химический состав
						</div>
						<div className="w-full overflow-hidden h-[200px] relative">
							<ul
								style={{
									transition: "0.3s",
								}}
								className="absolute bg-gray-100 p-4 pt-8 mt-[-200px] w-full  group-hover:mt-0 grid grid-cols-3 gap-2">
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>C 0,47-0,55
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Si 0,17-0,37
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Mn 0,5-0,8
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Ni ≤0,25
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									S≤0,035
								</li>
								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									P≤0,035
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Cr≤0,25
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Cu≤0,25
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									As≤0,08
								</li>

								<li className="flex items-center gap-4 text-gray-800">
									<span className="bg-[#ff2828] w-4 h-1"></span>
									Fe~97
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="py-10 bg-[#1d1d1d]">
				<div className="container">
					<div className="flex h-[200px] w-full gap-6">
						{links_products.slice(1, 3).map((el, index) => (
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

export default TabRolled;
