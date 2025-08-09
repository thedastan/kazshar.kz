"use client";

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	registration?: UseFormRegisterReturn;
	label?: string; 
}

export function InputComponent({
	error,
	className,
	registration,
	...props
}: Props) {
	const id = props.id || "input-" + Math.random().toString(36).substring(2, 9);

	return (
		<div className="w-full">
			 
			<input
				id={id}
				{...registration}
				{...props}
				className={twMerge(
					"border-b w-full bg-transparent h-[40px] rounded-0 py-2 outline-none text-[18px]",
					error ? "border-red-500" : "border-[#7e7e7e]",
					className
				)}
			/>
			{error && <p className="mt-1 text-sm text-red-500">{error}</p>}
		</div>
	);
}
