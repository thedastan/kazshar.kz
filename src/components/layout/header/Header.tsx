import logo from "@/assets/logo.png";
import { useMenuItems, useSocialNetworks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu";
import { AnimatePresence } from "framer-motion";
import { PAGE } from "@/config/public-page.config";
import DropdownMenuItem from "@/components/ui/menu/DropdownMenuItem";
import { useParams, usePathname } from "next/navigation";
import { useIsLocalizedHome } from "@/hooks/useIsLocalizedHome";
import LanguageDropdown from "./Language";

type DropdownKey = "about" | "client" | "news" | null;

const Header = () => {
	const menuItems = useMenuItems();
	const socialNetworks = useSocialNetworks();

	const [isBurger, setBurger] = useState(false);
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

	const isLocalizedHome = useIsLocalizedHome();
	const pathname = usePathname();

	const { locale } = useParams();

	const allowedPaths = Object.values(PAGE);

	const stripLocale = (path: string) =>
		path.replace(new RegExp(`^/${locale}`), "") || "/";

	const pathWithoutLocale = stripLocale(pathname);

	const isAllowedPage = allowedPaths.some(
		(p) => pathWithoutLocale === p || pathWithoutLocale.startsWith(p + "/")
	);

	if (!isAllowedPage) {
		return null;
	}

	return (
		<header
			className={`w-full md:bg-transparent bg-[#1b1b1b] border-b z-50 top-0 left-0 ${
				isLocalizedHome
					? "border-transparent absolute"
					: "border-transparent md:border-[#dbdbdb] relative"
			}`}>
			<div className="container mx-auto px-4">
				<div
					ref={menuRef}
					className="flex items-center justify-between relative py-2">
					<nav className="md:flex hidden items-center gap-6 flex-1">
						{menuItems.main.map((item, idx) =>
							item.key === "contact" || item.key === "home" ? (
								<Link
									key={idx}
									href={item.path!}
									className={`text-[18px]   font-normal whitespace-nowrap ${
										isLocalizedHome ? "text-white" : "text-black"
									}`}
									onClick={() => setOpenDropdown(null)}>
									{item.title}
								</Link>
							) : (
								<DropdownMenuItem
									setBurger={setBurger}
									key={idx}
									title={item.title}
									isOpen={openDropdown === item.key}
									onClick={() =>
										setOpenDropdown(
											openDropdown === item.key
												? null
												: (item.key as DropdownKey)
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

					<Link
						href={PAGE.HOME}
						className="flex md:justify-center justify-start flex-1"
						onClick={() => {
							setOpenDropdown(null);
							setBurger(false);
						}}>
						<Image className="w-[180px] h-auto" src={logo} alt="logo" />
					</Link>

					<div className="md:flex hidden gap-4 items-center  justify-end flex-1">
						<div className="hidden md:flex">
							<LanguageDropdown />
						</div>

						<div
							className={`md:flex gap-4  ${
								isLocalizedHome ? "text-white" : "text-black"
							}`}>
							{socialNetworks.map((el, index) => (
								<Link
									key={index}
									href={el.path}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[24px] font-normal">
									{el.icon}
								</Link>
							))}
						</div>
					</div>

					<div
						onClick={() => setBurger(!isBurger)}
						className="flex md:hidden gap-4 items-center text-white justify-end cursor-pointer"
						aria-label="Toggle menu">
						{isBurger ? <IoMdClose size={28} /> : <RxHamburgerMenu size={28} />}
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isBurger && <BurgerMenu setBurger={setBurger} />}
			</AnimatePresence>
		</header>
	);
};

export default Header;
