"use client";

import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
}

export function Title({ children, className, ...props }: Props) {
	return (
		<h1
			{...props}
			className={twMerge(
				"md:text-[30px] text-[22px] font-[500] leading-[120%] text-black",
				className
			)}>
			{children}
		</h1>
	);
}
