"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LanguageDropdown = () => {
	const pathname = usePathname();
	const { push: navigate } = useRouter();
	const params = useParams();
	const { locale } = params;
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const options = [
		{ value: "ru", label: "🇷🇺 RU" },
		{ value: "kk", label: "🇰🇿 KZ" },
		{ value: "en", label: "🇬🇧 EN" },
	];

	const LanguageChange = (newLocale: string) => {
		const newPathname = pathname.replace(`/${params.locale}`, `/${newLocale}`);
		navigate(newPathname);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	// Закрытие меню при клике вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const isHomePage = pathname === `/${locale}` || pathname === "/";

	if (isHomePage ) {
		return (
			<div className="relative inline-block" ref={menuRef}>
				{/* Кнопка для дропдауна */}
				<button
					className="flex items-center gap-2 px-3 py-2 bg-[#6b6b6b]     rounded-lg shadow-sm text-sm font-medium hover:bg-gray-100 transition-all"
					onClick={() => setIsOpen(!isOpen)}>
					{options.find((opt) => opt.value === locale)?.label}
					<span
						className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
						▼
					</span>
				</button>

				{/* Выпадающее меню */}
				{isOpen && (
					<div className="absolute left-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden animate-fadeIn">
						{options.map((option) => (
							<div
								key={option.value}
								className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2"
								onClick={() => {
									LanguageChange(option.value);
									setIsOpen(false);
								}}>
								{option.label}
							</div>
						))}
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="relative inline-block" ref={menuRef}>
			{/* Кнопка для дропдауна */}
			<button
				className="flex items-center gap-2 w-[100px] px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-100 transition-all"
				onClick={() => setIsOpen(!isOpen)}>
				{options.find((opt) => opt.value === locale)?.label}
				<span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
					▼
				</span>
			</button>

			{/* Выпадающее меню */}
			{isOpen && (
				<div className="absolute left-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden animate-fadeIn">
					{options.map((option) => (
						<div
							key={option.value}
							className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer transition-all flex items-center gap-2"
							onClick={() => {
								LanguageChange(option.value);
								setIsOpen(false);
							}}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default LanguageDropdown;
