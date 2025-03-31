"use client";
import React, { useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import ContactRfc from "./ContactRfc";

interface IFormInput {
  client_name: string;
  email: string;
  object_us: number;
  message: string;
}

interface FetchDataPro extends IFormInput {
  id: number;
}

const ContactFeedback = () => {
  const t = useTranslations("Contact");
  const [modal, setModal] = useState(false);
  const [loading] = useState(false);

  const [val, setVal] = useState<FetchDataPro[]>([]);
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  console.log(val);
  

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      const { data } = await axios.post<FetchDataPro>(
        "https://kazshar.site/ru/api/kashgar/contact_us/",
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
    <div>
      <form
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
            {...register("object_us", { required: true, valueAsNumber: true })}
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
      </form>
      <div className="flex items-center justify-center flex-col gap-1 max-w-[350px] w-full mt-[10px]">
        <div className="flex text-white flex-col items-center text-center w-[100%] h-[100%]">
          <h1 className="text-[17px] font-[600] text-white">{t("proposal")}</h1>
        </div>
        <div className="flex text-white flex-col w-[100%] h-[100%]">
          <button
            onClick={() => setModal(true)}
            style={{ transition: "0.3s" }}
            className="bg-[#c71212] text-[16px] px-[5px] mt-2 w-full border-[1px] border-white hover:bg-white hover:text-[#c71212] text-[#fff] font-[600] h-[32px]"
          >
            {t("balls")}
          </button>
        </div>
      </div>
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-[#c71212] p-10 rounded-lg w-full flex justify-center md:w-[500px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactRfc />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFeedback;
