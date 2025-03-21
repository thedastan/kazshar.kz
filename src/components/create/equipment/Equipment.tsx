"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useGetToolsQuery } from "@/redux/api/cards";
import Link from "next/link";

const Equipment = () => {
	const { data } = useGetToolsQuery();

	useEffect(() => {
		Fancybox.bind("[data-fancybox='gallery']", {});
		return () => {
			Fancybox.destroy();
		};
	}, []);

	return (
		<div className="py-20">
			<div className="container">
				<h1 className="md:text-[40px] text-[30px] pb-10 font-[700] text-center">
					Используемое оборудование
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{data?.map((el, index) => (
						<Link
							key={index}
							data-aos="fade-up"
							data-aos-delay={el.id * 200}
							href={el.tools_image}
							data-fancybox="gallery"
							className="relative w-full h-[340px] overflow-hidden rounded-[4px] block">
							<h1>{el.id}</h1>
							<Image
								fill
								className="object-cover"
								src={el.tools_image}
								alt="img"
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Equipment;
