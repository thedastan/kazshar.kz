import { motion } from "framer-motion";
import { useMenuItems, useSocialNetworks } from "@/lib/data";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import DropdownMenuItem from "@/components/ui/menu/DropdownMenuItem";
import LanguageDropdown from "./Language";

type DropdownKey = "about" | "client" | "news" | null;

 
interface IBurger {
	setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({ setBurger }: IBurger) => {
	const net = useSocialNetworks();
	const menuItems = useMenuItems();

	const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);

	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<motion.div
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: "auto", opacity: 1 }}
			exit={{ height: 0, opacity: 0 }}
			transition={{ duration: 0.4 }}
			className="bg-black w-full overflow-hidden ">
			<div className="container flex flex-col gap-10 h-[450px]" ref={menuRef}>
				<nav className="flex flex-col mt-8 items-center justify-center gap-6 ">
					{menuItems.main.map((item, idx) =>
						item.key === "contact" ? (
							<Link
								key={idx}
								href={item.path!}
								className="text-[18px] text-white font-normal whitespace-nowrap"
								onClick={() => setBurger(false)}>
								{item.title}
							</Link>
						) : (
							<DropdownMenuItem
								key={idx}
								setBurger={setBurger}
								title={item.title}
								isOpen={openDropdown === item.key}
								onClick={() =>
									setOpenDropdown(
										openDropdown === item.key ? null : (item.key as DropdownKey)
									)
								}
								links={
									menuItems.dropdowns[
										item.key as keyof typeof menuItems.dropdowns
									]
								}
							/>
						)
					)}
				</nav>
				<div className="flex w-full justify-center">
							<LanguageDropdown />
						</div>
				<div className="flex gap-4 items-center text-white justify-center">
					{net.map((el, index) => (
						<Link
							key={index}
							href={el.path}
							className="text-[24px] font-normal">
							{el.icon}
						</Link>
					))}
				</div>
			</div>
		</motion.div>
	);
};
export default BurgerMenu;
