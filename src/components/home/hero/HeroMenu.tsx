import { links_nav  } from "@/components/navbar/data";
import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

interface HeroMenuProps {
	isSidebarOpen: boolean;
}
const HeroMenu = ({ isSidebarOpen }: HeroMenuProps) => {
	return (
		// <div className="flex flex-col items-center justify-between h-full py-6">
		<div className="flex z-50 flex-col items-start h-full justify-between  pt-6 ">
			<div className="flex z-50 px-2 flex-col w-full  items-start justify-center gap-4">
				{links_nav.map((el, index) => (
					<Link key={index} className="w-full" href={el.path}>
						<div
							style={{
								transition: "0.1s",
							}}
							className="flex items-center hover:bg-[#ff5656] p-2 w-full gap-4">
							<div className="text-white text-3xl">{el.icon}</div>
							<div
								style={{
									width: isSidebarOpen ? "100%" : "0",
									transition: "1s",
								}}
								className=" overflow-hidden h-6">
								<h2
									className="text-white"
									style={{
										marginTop: isSidebarOpen ? "0px" : "40px",
										transition: "1s",
									}}>
									{el.title}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div className="bg-black w-full p-4">
				<div className="">
					<div className="text-white text-3xl">
						<RiWhatsappFill />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroMenu;
