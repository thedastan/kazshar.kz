import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

interface IFormInput {
	name_company: string;
	email: string;
	object_choices: string;
	status_dostav: string;
	country: string;
	city: string;
	volume_tons: string;
	hardness: string;
}

interface FetchDataPro extends IFormInput {
	id: number;
}

const ContactRfc = () => {
	const t = useTranslations("Contact");
	const [val, setVal] = useState<FetchDataPro[]>([]);
	const { register, handleSubmit, reset, setValue } = useForm<IFormInput>({
		defaultValues: {
			status_dostav: "Самовывоз",
			country: "не указано",
			city: "не указано",
		},
	});
	const [deliveryMethod, setDeliveryMethod] = useState<string>("0");
	const [isLoading, setIsLoading] = useState(false);


	console.log(val);
	
	const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
		setIsLoading(true);
		try {
			const { data } = await axios.post<FetchDataPro>(
				"https://kazshar.site/ru/api/kashgar/rfc_proposal/",
				JSON.stringify({
					...formData,
					object_choices: Number(formData.object_choices),
					hardness: Number(formData.hardness),
					volume_tons: Number(formData.volume_tons),
				}),
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			setVal((prev) => [...prev, data]);
			// toast.success("Форма успешно отправлена!");
			toast.success(t("formSubmittedSuccessfully"));
			reset();
		} catch (e) {
			// toast.error("Ошибка при отправке запроса");
			console.log(e,"error");
			
			toast.success(t("errortoas"));
		} finally {
			setIsLoading(false);
		}
	};

	const handleDeliveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedMethod = e.target.value;
		setDeliveryMethod(selectedMethod);
		setValue(
			"status_dostav",
			selectedMethod === "Доставка" ? "Доставка" : "Самовывоз"
		);

		if (selectedMethod === "Доставка") {
			setValue("city", "");
			setValue("country", "");
		} else {
			setValue("city", "не указано");
			setValue("country", "не указано");
		}
	};

	return (
		<div className="">
			<Toaster position="top-center" />
			<div className="flex flex-col items-center gap-1 max-w-[350px] w-full">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-[10px]">
					<h1 className="text-[22px] md:text-[22px] font-[600] text-white flex text-center">
						{t("proposal")}
					</h1>
					<div className="flex text-white flex-col w-[100%] h-[100%]">
						<p className="text-[16px] font-[400]">{t("organization_name")}</p>
						<input
							{...register("name_company", { required: true })}
							className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
							type="text"
						/>
					</div>
					<div className="flex text-white flex-col w-[100%] h-[100%]">
						<p className="text-[16px] font-[400]">{t("email")}</p>
						<input
							{...register("email", { required: true })}
							className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
							type="text"
						/>
					</div>
					<div className="flex text-white flex-col w-[100%] h-[100%]">
						<p className="text-[16px] font-[400]">{t("object")}</p>
						<select
							{...register("object_choices", {
								required: true,
								valueAsNumber: true,
							})}
							defaultValue={4}
							className="w-[100%] h-[32px] px-2 text-[14px] bg-white text-[#383838] outline-none">
							<option value={4}>{t("option2")}</option>
							<option value={5}>{t("option1")}</option>
							<option value={6}>{t("option")}</option>
						</select>
					</div>

					<div className="flex text-white flex-col w-[100%] h-[100%]">
						<p className="text-[16px] font-[400]">
						{t("product")}
						</p>
						<select
							className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
							defaultValue="0"
							onChange={handleDeliveryChange}>
							<option value="Самовывоз">{t("Pickup")}</option>
							<option value="Доставка">{t("Delivery")}</option>
						</select>
					</div>

					{deliveryMethod === "Доставка" && (
						<div className="flex gap-2">
							<div className="flex text-white flex-col w-[100%] h-[100%]">
								<p className="text-[16px] font-[400]">{t("city")}</p>
								<input
									{...register("city", {
										required: deliveryMethod === "Доставка",
									})}
									className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
									type="text"
								/>
							</div>
							<div className="flex text-white flex-col w-[100%] h-[100%]">
								<p className="text-[16px] font-[400]">{t("country")}</p>
								<input
									{...register("country", {
										required: deliveryMethod === "Доставка",
									})}
									className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
									type="text"
								/>
							</div>
						</div>
					)}

					<div className="flex gap-2">
						<div className="flex text-white flex-col w-[100%] h-[100%]">
							<p className="text-[16px] font-[400]">{t("Volume")}</p>
							<input
								{...register("volume_tons", { required: true })}
								className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
								type="number"
							/>
						</div>
						<div className="flex text-white flex-col w-[100%] h-[100%]">
							<p className="text-[16px] font-[400]">{t("Hardness")}</p>
							<input
								{...register("hardness", {
									required: true,
									pattern: /^[1-5]$/,
								})}
								className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
								type="text"
								maxLength={1}
								onInput={(e: React.FormEvent<HTMLInputElement>) => {
									const target = e.target as HTMLInputElement;
									if (!/^[1-5]$/.test(target.value)) {
										target.value = "";
									}
								}}
							/>
						</div>
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
		</div>
	);
};

export default ContactRfc;
