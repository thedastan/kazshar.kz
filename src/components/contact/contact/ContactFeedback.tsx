"use client";
import React, { useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

interface IFormInput {
	client_name: string;
	email: string;
	object_us: string;
	message: string;
}

interface FetchDataPro extends IFormInput {
	id: number;
}

const ContactFeedback = () => {
	const t = useTranslations("Contact");

	const [val, setVal] = useState<FetchDataPro[]>([]);
	const { register, handleSubmit, reset } = useForm<IFormInput>();
	const [isLoading, setIsLoading] = useState(false);

	console.log(val);

	const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
		setIsLoading(true);
		try {
			const { data } = await axios.post<FetchDataPro>(
				"https://kazshar.site/ru/api/kashgar/contact_us/",
				formData
			);
			setVal((prev) => [...prev, data]);
			toast.success(t("formSubmittedSuccessfully"));
			reset();
		} catch (e) {
			console.error(e);
			toast.error(t("errortoas"));
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="w-[100%] md:w-[300px] sm:w-[500px]">
			<Toaster position="top-center" />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex items-start justify-start flex-col gap-1  w-full">
				<div className="flex text-white flex-col w-[100%] h-[100%]">
					<p className="text-[16px] font-[400]">{t("name")}</p>
					<input
						{...register("client_name", { required: "Это поле обязательно" })}
						className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
						type="text"
					/>
				</div>
				<div className="flex text-white flex-col w-[100%] h-[100%]">
					<p className="text-[16px] font-[400]">{t("email")}</p>
					{/* <input
						{...register("email", { required: "Это поле обязательно" })}
						className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
						type="text"
					/> */}

					<input
						{...register("email", {
							required: "Это поле обязательно",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
								message: "Введите корректный Gmail адрес",
							},
						})}
						className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
						type="text"
					/>
				</div>
				<div className="flex text-white flex-col w-[100%] h-[100%]">
					<p className="text-[16px] font-[400]">{t("object")}</p>
					<input
						{...register("object_us", { required: "Это поле обязательно" })}
						className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
						type="text"
					/>
				</div>
				<div className="flex text-white flex-col w-[100%] h-[100%]">
					<p className="text-[16px] font-[400]">{t("message")}</p>
					<textarea
						{...register("message", { required: "Это поле обязательно" })}
						className="w-[100%] h-[70px] px-2 py-1 text-[14px] text-[#383838] outline-none"
					/>
				</div>
				<div className="flex text-white flex-col w-[100%] h-[100%]">
					<button
						type="submit"
						style={{ transition: "0.3s" }}
						className="bg-[#c71212] mt-4 w-full border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] font-[600] h-[32px]">
						{isLoading ? t("btn_loading") : t("btn3")}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactFeedback;
