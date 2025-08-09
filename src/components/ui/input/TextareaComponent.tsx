"use client";

import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	registration?: UseFormRegisterReturn;
}

export function TextareaComponent({
	label,
	error,
	className,
	registration,
	...props
}: Props) {
	const id =
		props.id || "textarea-" + Math.random().toString(36).substring(2, 9);

	return (
		<div className="w-full">
			<style jsx global>{`
				.swiper-button-prev::after,
				.swiper-button-next::after {
					font-size: 24px !important;
					color: white !important;
				}

				.swiper-button-prev,
				.swiper-button-next {
					width: 40px !important;
					height: 40px !important;
				}

				.swiper-pagination-bullet {
					background-color: #000000 !important;
					width: 10px !important;
					height: 10px !important;
					border-radius: 50% !important;
				}

				.swiper-pagination-bullet-active {
					background-color: #ffffff !important;
				}
			`}</style>

			{label && (
				<label htmlFor={id} className="block text-sm mb-1 text-gray-300">
					{label}
				</label>
			)}
			<textarea
				id={id}
				{...registration}
				{...props}
				style={{
					scrollbarWidth: "thin",
					scrollbarColor: "#8b5cf6 #1d1d1d", // фиолетовый скролл на тёмном фоне
				}}
				className={twMerge(
					"border-b w-full h-[40px] rounded-0 py-2 outline-none text-[18px] bg-transparent  min-h-20 ",
					error ? "border-red-500" : "border-[#7e7e7e]",
					className
				)}
			/>
			{error && <p className="mt-1 text-sm text-red-500">{error}</p>}
		</div>
	);
}
