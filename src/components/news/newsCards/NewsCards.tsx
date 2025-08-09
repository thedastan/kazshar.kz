"use client";
import Image from "next/image";
import img from "@/assets/img1.jpeg";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";

const NewsCards = () => {
	const data = [
		{
			id: 0,
			img: img,
			title: "News title",
			desc: "Будьте в курсе последних событий, достижений и обновлений компании КазШар. Мы делимся важными новостями, рассказываем о новых проектах и делаем анонсы мероприятий.",
		},
		{
			id: 1,
			img: img,
			title: "News title",
			desc: "Будьте в курсе последних событий, достижений и обновлений компании КазШар. Мы делимся важными новостями, рассказываем о новых проектах и делаем анонсы мероприятий.",
		},
		{
			id: 2,
			img: img,
			title: "News title",
			desc: "Будьте в курсе последних событий, достижений и обновлений компании КазШар. Мы делимся важными новостями, рассказываем о новых проектах и делаем анонсы мероприятий.",
		},
	];

	const [selectedNews, setSelectedNews] = useState<null | (typeof data)[0]>(
		null
	);

	return (
		<section className="w-full min-h-[100vh] py-16">
			<div className="container">
				<div className=" grid md:grid-cols-3 grid-cols-1 gap-8">
					{data.map((el, index) => (
						<div
							key={index}
							className="flex flex-col justify-between items-start">
							<div className="w-full">
								<Image src={img} alt="img" />
								<Title className="mt-2">{el.title}</Title>
								<Description>
									{el.desc.length > 100
										? el.desc.slice(0, el.desc.lastIndexOf("", 100)) + "..."
										: el.desc}
								</Description>
							</div>
							<Button
								onClick={() => setSelectedNews(el)}
								className=" rounded-sm mt-3">
								Подробнее
							</Button>
						</div>
					))}
				</div>
			</div>
			<Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)}>
				{selectedNews && (
					<div className="flex md:flex-row flex-col gap-3">
						<div className="md:mt-0 mt-8 relative overflow-hidden rounded-md w-full max-w-[600px] h-[300px]">
							<Image fill objectFit="cover" src={img} alt="img" />
						</div>
						<div className="w-full max-w-[500px] mt-6">
							<Title>{selectedNews.title}</Title>
							<Description className="mt-2">{selectedNews.desc}</Description>
						</div>
					</div>
				)}
			</Modal>
		</section>
	);
};

export default NewsCards;
