"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";

interface ApartmentCardProps {
	id: number;
	img: string | StaticImageData;
	title: string;
	location: string;
	time: string;
	price: string;
	moth: string;
	showDelete?: boolean;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
	id,
	img,
	title,
	location,
	time,
	price,
	moth,
	showDelete,
}) => {
	
	return (
		<Link href={`/${id}`}>
			<div className="bg-[#fff] rounded-md w-full flex-col p-2 flex gap-3 cursor-pointer">
				<div className="flex gap-3">
					<div className="relative max-w-[100px] w-full h-[100px] rounded-md overflow-hidden">
						<Image fill objectFit="cover" src={img} alt="img" />
					</div>
					<div className="w-full flex flex-col gap-1 justify-between">
						<div>
							<Title>{title}</Title>
							<Description
								className="text-[#646464] mt-1 flex items-center gap-1 font-normal text-[14px]"
								style={{
									fontSize: 14,
									lineHeight: 1,
									display: "flex",
									alignItems: "center",
								}}>
								<IoLocationSharp
									size={13}
									style={{ flexShrink: 0, display: "block" }}
								/>
								<span className="leading-[140%]">{location}</span>
							</Description>
						</div>
						<div className="md:flex hidden justify-between items-end w-full gap-2">
							<Description className="flex items-center gap-1 text-[#646464]">
								<IoMdTime />
								{time}
							</Description>
							<Description className="text-[#24B23E] font-[500]">
								{price}c/{moth}
							</Description>
							{showDelete && (
								<Button className="border w-[50px]  px-0 py-2 bg-[#fd4444] hover:bg-[#fd4444]  flex justify-center   text-white">
									<RiDeleteBinLine />
								</Button>
							)}
						</div>
					</div>
				</div>

				<div className="flex md:hidden justify-between items-center w-full gap-2">
					<Description className="flex items-center gap-1 text-[#636262]">
						<IoMdTime />
						{time}
					</Description>
					<Description className="text-[#24B23E] font-bold">
						{price}c/{moth}
					</Description>
					{showDelete && (
						<Button className="border w-[40px]  px-0 py-2 bg-[#fd4444] hover:bg-[#fd4444]  flex justify-center   text-white">
							<RiDeleteBinLine />
						</Button>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ApartmentCard;
