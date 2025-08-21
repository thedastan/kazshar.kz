import { Button } from "@/components/ui/button/Button";
import { InputComponent } from "@/components/ui/input/InputComponent";
import { TextareaComponent } from "@/components/ui/input/TextareaComponent";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from "sonner";

interface IFormInput {
  name: string;
  gmail: string;
  phone: string;
  message: string;
}

interface FetchDataPro extends IFormInput {
  id: number;
}

const Contact = () => {
  const t = useTranslations("ContactHome");

  const [, setVal] = useState<FetchDataPro[]>([]);
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<FetchDataPro>(
        "https://api.kazshar.ru/ru/api/kashgar/callback/",
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
    <section className="w-full min-h-[100vh] py-16 bg-[#dee4e9]">
      <Toaster position="top-center" />
      <div className="container flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center gap-8 items-center text-center text-black">
          <TitleComponent>{t("title")}</TitleComponent>
          <Description>{t("desc")}</Description>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[700px] flex flex-col items-center justify-center gap-6"
        >
          <InputComponent
            placeholder={t("name")}
            {...register("name", { required: "Это поле обязательно" })}
            type="text"
          />
          <InputComponent
            placeholder={t("email")}
            {...register("gmail", { required: "Это поле обязательно" })}
            type="text"
          />
          <InputComponent
            placeholder={t("phone")}
            {...register("phone", { required: "Это поле обязательно" })}
            type="number"
          />
          <TextareaComponent
            placeholder={t("message")}
            {...register("message", { required: "Это поле обязательно" })}
          />
          <Button
            className="bg-[#4787ff] rounded-sm md:w-[300px] w-full"
            type="submit"
          >
            {t("btn")}
          </Button>
        </form>

        <div className="flex flex-col gap-6">
          <Link
            className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
            href={"tel:+7 771 251 0703"}
            target={"_blank"}
          >
            <FaPhoneAlt /> +7 771 251 0703
          </Link>

          <Link
            className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
            href={"tel:+7 771 251 0703"}
            target={"_blank"}
          >
            <FaPhoneAlt /> +7 771 638 0820
          </Link>

          <Link
            className="text-[18px] flex items-center justify-center gap-2 text-center font-[400] leading-[140%]"
            href={"mailto:saleskazshar@gmail.com.com"}
            target={"_blank"}
          >
            <MdEmail /> saleskazshar@gmail.com.com
          </Link>

          <Link
            className="text-[18px] flex items-center justify-center max-w-[700px] gap-2 text-center font-[400] leading-[140%]"
            href={
              "https://www.google.com/maps/search/%D0%9A%D0%BE%D1%80%D0%B4%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D1%80-%D0%BD,+%D1%81.+%09%09%09%09%09%09%D0%9A%D0%BE%D1%80%D0%B4%D0%B0%D0%B9,+%D1%83%D0%BB.+%D0%91%D0%B5%D1%80%D0%B8%D0%BA%D1%82%D0%B0%D1%81,+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+5./@43.0128914,74.7298227,17.49z?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
            }
            target={"_blank"}
          >
            {t("location")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
