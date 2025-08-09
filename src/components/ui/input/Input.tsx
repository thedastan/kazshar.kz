"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	icon?: ReactNode;
	registration?: UseFormRegisterReturn;
}

export function Input({
	label,
	error,
	icon,
	className,
	registration,
	...props
}: Props) {
	const id = props.id || "input-" + Math.random().toString(36).substring(2, 9);

	return (
		<div className="w-full">
			{label && (
				<label
					htmlFor={id}
					className="block mb-1 text-sm font-medium text-gray-600">
					{label}
				</label>
			)}
			<div className="flex items-center gap-2">
				{icon && (
					<div className="bg-violet-600 text-white rounded-[50px] text-[22px] p-2">
						{icon}
					</div>
				)}
				<input
					id={id}
					{...registration}
					{...props}
					className={twMerge(
						"border border-gray-300 bg-[#ffffff70] p-3 w-full rounded-md resize-none outline-none  ",
						error ? "border-red-500" : "border-gray-300",
						className
					)}
				/>
			</div>
			{error && <p className="mt-1 text-sm text-red-500">{error}</p>}
		</div>
	);
}
