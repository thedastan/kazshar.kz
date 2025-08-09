"use client";

import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
}

export function TitleComponent({ children, className, ...props }: Props) {
	return (
		<h1
			{...props}
			className={twMerge("md:text-[46px] text-[30px] text-center font-[600] leading-[120%]  ", className)}>
			{children}
		</h1>
	);
}
