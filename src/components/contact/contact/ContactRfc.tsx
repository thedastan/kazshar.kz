import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  client_name: string;
  email: string;
  object_choices: string;
  message: string;
}

interface FetchDataPro extends IFormInput {
  id: number;
}

const ContactRfc = () => {
  const t = useTranslations("Contact");
  const [val, setVal] = useState<FetchDataPro[]>([]);
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  // const [loading, setLoading] = useState(false);

  console.log(val);

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      const { data } = await axios.post<FetchDataPro>(
        "https://kazshar.site/ru/api/kashgar/rfc_proposal/",
        formData
      );
      setVal((prev) => [...prev, data]); // Добавляем только подтвержденные сервером данные
      reset();
    } catch (e) {
      console.error(e);
      alert("Ошибка при отправке");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center  gap-1   max-w-[350px] w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px]"
        >
          <h1 className="text-[22px] md:text-[22px] font-[600] text-white flex text-center">
            {t("proposal")}
          </h1>
          <div className="flex text-white flex-col w-[100%] h-[100%]">
            <p className="text-[16px] font-[400]"> {t("name")}</p>
            <input
              {...register("client_name", { required: true })}
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
              className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
              {...register("object_choices", { required: true })}
              defaultValue=""
            >
              <option value={4}>{t("option")}</option>
              <option value={5}>{t("option1")}</option>
              <option value={6}>{t("option2")}</option>
            </select>
          </div>
          <div className="flex text-white flex-col w-[100%] h-[100%]">
            <p className="text-[16px] font-[400]">{t("message")}</p>
            <textarea
              {...register("message", { required: true })}
              className="w-[100%] h-[70px] py-1 px-2 text-[14px] text-[#383838] outline-none"
              // type="text"
            />
          </div>
          <div className="flex text-white flex-col w-[100%] h-[100%]">
            <button
              type="submit"
              style={{ transition: "0.3s" }}
              className="bg-[#c71212]  mt-4 w-full border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] font-[600] h-[32px]"
            >
              {t("btn3")}
            </button>
          </div>
        </form>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-start justify-center flex-col gap-1 max-w-[450px] w-full"
        >
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
            <input
              {...register("email", { required: "Это поле обязательно" })}
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
              className="w-[100%] h-[32px] px-2 text-[14px] bg-white text-[#383838] outline-none"
            >
              <option value={4}>{t("option")}</option>
              <option value={5}>{t("option1")}</option>
              <option value={6}>{t("option2")}</option>
            </select>
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
              className="bg-[#c71212] mt-4 w-full border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] font-[600] h-[32px]"
              disabled={loading}
            >
              {loading ? "Отправка..." : t("btn3")}
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default ContactRfc;
