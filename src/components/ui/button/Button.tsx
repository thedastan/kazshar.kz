"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
}

export function Button({
	children,
	className,
	...props
}: Props) {
	const baseStyles =
		"px-4 py-3  rounded-[10px] font-semibold text-[18xp] cursor-pointer  transition-all duration-300  bg-[#2b8cb9] hover:bg-[#25aae7] text-white ";

	return (
		<button {...props} className={twMerge(baseStyles, className)}>
			{children}
		</button>
	);
}
