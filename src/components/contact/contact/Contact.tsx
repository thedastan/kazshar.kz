"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactRfc from "./ContactRfc";
import ContactFeedback from "./ContactFeedback";

const Contact = () => {
	const [tab, setTab] = useState("form");
	const [modal, setModal] = useState(false);
	return (
		<div>
			<div className="flex flex-col md:flex-row   md:items-none h-full md:h-[100vh]">
				<div className="bg-[rgb(199,18,18)] h-[700px] md:h-[100vh] px-[20px]  w-[100%] md:w-[700px] flex flex-col items-center">
					<div className="w-[100%] flex justify-center mt-[100px]">
						<h1 className="text-[22px] md:text-[32px] font-[600] text-white">
							связаться с нами
						</h1>
					</div>
					<div className="flex max-w-[334px] w-full">
						<button
							className={`px-4 h-[32px] transition ${
								tab === "form"
									? "bg-[#fff] text-[#c71212] font-[600]  mt-2 w-full border-[1px] border-white"
									: "bg-[#c71212] text-white  mt-2 w-full border-[1px] border-white"
							}`}
							onClick={() => setTab("form")}>
							Форма связи
						</button>
						<button
							className={`px-4 h-[32px] transition ${
								tab === "contact"
									? "bg-[#fff] text-[#c71212] font-[600]  mt-2 w-full border-[1px] border-white"
									: "bg-[#c71212] text-white  mt-2 w-full border-[1px] border-white"
							}`}
							onClick={() => setTab("contact")}>
							Контакт
						</button>
					</div>
					<div className="">
						{tab === "form" ? (
							<div className="">
								<ContactFeedback />

								<div className="flex items-center justify-center flex-col gap-1 max-w-[350px] w-full  mt-[40px]">
									<div className="flex text-white flex-col items-center text-center w-[100%] h-[100%]">
										<h1 className="text-[17px] font-[600] text-white">
											Запрос коммерческого предложения
										</h1>
									</div>
									<div className="flex text-white flex-col w-[100%] h-[100%]">
										<button
											onClick={() => setModal(true)}
											style={{ transition: "0.3s" }}
											className="bg-[#c71212]  mt-2 w-full border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] font-[600] h-[32px]">
											Сделать запрос на шары
										</button>
									</div>
								</div>
							</div>
						) : (
							<div className="mt-[40px]">
								<div className="flex items-start justify-center flex-col mt-2 gap-4 max-w-[350px] w-full">
									<div className="flex gap-2 text-white">
										<h1 className="text-[22px]">
											<MdOutlineMailOutline />
										</h1>
										<div className="">
											<h1 className="">saleskazshar@gmail.com</h1>
										</div>
									</div>
									<div className="flex gap-2 text-white">
										<h1 className="text-[22px]">
											<FiPhone />
										</h1>
										<div className="">
											<h1 className="">+7 771 251 0703</h1>
										</div>
									</div>
									<div className="flex gap-2 text-white">
										<h1 className="text-[22px]">
											<FaWhatsapp />
										</h1>
										<div className="">
											<h1 className="">+7 771 638 0820</h1>
										</div>
									</div>

									<div className="flex gap-2 text-white">
										<h1 className="text-[22px]">
											<FiMapPin />
										</h1>
										<div className="">
											<h1 className="">
												Республика Казахстан, Жамбылская обл., Кордайский р-н,
												с. Кордай, ул. Бериктас, строение 5
											</h1>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className="w-[100%] h-[600px] md:h-[100%]">
					<div className="map">
						<iframe
							src="/map.html"
							frameBorder="0"
							scrolling="no"
							title="Map on 2GIS"></iframe>
					</div>
				</div>
			</div>
			{modal && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setModal(false)}>
					<div
						className="bg-[#c71212] p-10   rounded-lg w-full flex  justify-center md:w-[500px] relative"
						onClick={(e) => e.stopPropagation()}>
						<ContactRfc />
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
