"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { links_nav, links_products } from "../data";
import BurgerMenu from "./BurgerMenu";
import { PHONE_NUMBER } from "@/constants/admin";
import { CgMenuRight } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Проверяем, находится ли текущий маршрут в списке продуктов
	const isProductPage = links_products.some((product) =>
		pathname.startsWith(product.path)
	);

	// Закрытие меню при клике вне его
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	if (pathname === "/") {
		return (
			<div className="fixed z-10 w-full">
				<div className="container">
					<div className="py-1">
						<h1 className="text-[40px] font-[800] text-[#ffffff8f]">КАЗШАР</h1>
					</div>
				</div>
			</div>
		);
	}

	return (
		<header className="bg-white w-full h-[74px]">
			<div className="bg-white border-b-2 border-grey-500 w-full h-[74px] fixed z-20">
				<div className="container">
					<div className="flex justify-between items-center w-full h-[74px]">
						<div className="flex justify-start">
							<Link href={"/"}>КАЗШАР</Link>
						</div>

						<div className="hidden sm:flex justify-center gap-6 w-full">
							{links_nav.map((el, index) => (
								<div key={index} className="relative">
									{el.path === "/forged" ? (
										<div ref={menuRef}>
											<button
												onClick={() => setIsOpen(!isOpen)}
												className={`font-normal text-[14px] uppercase ${
													isProductPage
														? "border-b-2 border-[#ff2828] text-[#ff2828]"
														: ""
												}`}>
												Продукция
											</button>
											{isOpen && (
												<div className="absolute top-10 left-0 z-10 bg-white rounded-lg shadow-md p-2 w-[250px]">
													{links_products.map((product, i) => (
														<Link
															key={i}
															href={product.path}
															className={`block px-4 py-2 bg-transparent hover:bg-gray-100 ${
																pathname === product.path
																	? "bg-[#ff5656] text-white hover:bg-[#e02f2f]"
																	: ""
															}`}
															onClick={() => setIsOpen(false)}>
															{product.title}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											href={el.path}
											className={`font-normal text-[14px] uppercase ${
												pathname === el.path
													? "border-b-2 border-[#ff2828] text-[#ff2828]"
													: ""
											}`}>
											{el.title}
										</Link>
									)}
								</div>
							))}
						</div>

						<div className="flex gap-2 items-center justify-end">
							<div className="flex sm:hidden">
								<button
									onClick={() => setIsMenuOpen(true)}
									className="w-[48px] h-[48px] flex justify-center items-center bg-[#F4F5F6] rounded-[12px]">
									<CgMenuRight />
								</button>
							</div>

							<div className="hidden sm:flex border-[2px] rounded-[10px] px-1 border-[#ff2828]">
								<Link
									href={`tel:${PHONE_NUMBER}`}
									className="w-[180px] flex gap-2 bg-white text-[16px] text-[#ff2828] font-normal h-full py-1 justify-center items-center rounded-[12px] border-1 border-black">
									<FaPhoneAlt /> {PHONE_NUMBER}
								</Link>
							</div>
						</div>
					</div>
				</div>

				<BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
			</div>
		</header>
	);
};

export default Header;
