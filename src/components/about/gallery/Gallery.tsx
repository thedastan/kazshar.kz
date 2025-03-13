"use client";
import img1 from "@/assets/img4.jpg";
import img2 from "@/assets/img5.jpg";
import img3 from "@/assets/img6.jpg";
import img4 from "@/assets/img1.jpg";
import img5 from "@/assets/img2.jpg";
import img6 from "@/assets/img3.jpg";

import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";

const data = [
	{ img: img4 },
	{ img: img5 },
	{ img: img6 },
	{ img: img1 },
	{ img: img2 },
	{ img: img3 },
]  

const Gallery = () => {
	useEffect(() => {
		Fancybox.bind("[data-fancybox='gallery']", {});
		return () => {
			Fancybox.destroy();
		};
	}, []);

	return (
		<div className="py-20">
			<div className="container">
				<h1 className="text-[40px] pb-10 font-[700] text-center">
					Наша галерея
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{data.map((el, index) => (
						<Link
							key={index}
							data-aos="fade-up"
							data-aos-delay={index * 200}
							href={el.img.src}
							data-fancybox="gallery"
							className="relative w-full h-[340px] overflow-hidden rounded-[4px] block">
							<Image fill className="object-cover" src={el.img} alt="img" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
