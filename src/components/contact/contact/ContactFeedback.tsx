"use client";
import React, { useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { TextareaComponent } from "@/components/ui/input/TextareaComponent";
import { InputComponent } from "@/components/ui/input/InputComponent";
import { Button } from "@/components/ui/button/Button";

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
        "https://api.kazshar.ru/ru/api/kashgar/contact_us/",
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
    <div className="w-[100%]">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center flex-col gap-2 text-white w-full"
      >
        <InputComponent
          className="border-white"
          placeholder={t("name")}
          {...register("client_name", { required: "Это поле обязательно" })}
          type="text"
        />
        <InputComponent
          className="border-white"
          placeholder={t("email")}
          {...register("email", {
            required: "Это поле обязательно",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "Введите корректный Gmail адрес",
            },
          })}
          type="text"
        />
        <InputComponent
          className="border-white"
          placeholder={t("object2")}
          {...register("object_us", { required: "Это поле обязательно" })}
          type="text"
        />
        <TextareaComponent
          className="border-white"
          placeholder={t("message")}
          {...register("message", { required: "Это поле обязательно" })}
        />
        <Button
          className="w-full bg-white text-[#29648A] rounded-sm hover:text-white"
          type="submit"
        >
          {isLoading ? t("btn_loading") : t("btn3")}
        </Button>
      </form>
    </div>
  );
};

export default ContactFeedback;
