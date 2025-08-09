import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useIsLocalizedHome } from "@/hooks/useIsLocalizedHome";

interface DropdownMenuItemProps {
	title: string;
	isOpen: boolean;
	setBurger: React.Dispatch<React.SetStateAction<boolean>>;
	onClick: () => void;
	links: { href: string; label: string }[];
	positionLeft?: number; // Для смещения меню вправо, если нужно
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
	title,
	isOpen,
	onClick,
	setBurger,
	links,
}) => {
	

	const isLocalizedHome = useIsLocalizedHome();
	

	return (
		<div className="relative  ">
			<button
				onClick={onClick}
				className={`text-[18px] font-normal cursor-pointer whitespace-nowrap ${
					isLocalizedHome
						? "md:text-white text-white"
						: "md:text-black text-white"
				}`}
				aria-expanded={isOpen}
				aria-haspopup="true">
				{title}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className={`
							absolute
							md:top-full
							md:mt-2
							  top-[100%] md:ml-0 ml-[-100px]  -translate-x-1/2
							bg-white border border-[#d4d4d4] rounded-xl p-2 flex flex-col gap-2 shadow-lg w-[280px]  
							z-50
						`}>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-[18px] font-normal hover:bg-[#e6e6e6] text-black rounded-md p-2 transition-colors duration-300"
								onClick={() => {
									setBurger(false);
									onClick();
								}}  
							>
								{link.label}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropdownMenuItem;
