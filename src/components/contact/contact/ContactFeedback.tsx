import React from "react";
import { useContactUsMutation } from "@/redux/api/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

type ContactFormData = {
  id: number;
  client_name: string;
  email: string;
  object_us: number;
  message: string;
};

const ContactFeedback = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [contactData] = useContactUsMutation();
  const t = useTranslations("Contact");

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const { object_us, ...restData } = data;
      const contactPayload = { ...restData, object_us: object_us.toString() };

      console.log("Sending contact data:", contactPayload);

      const { data: responseData, error } = await contactData(contactPayload);

      if (responseData) {
        localStorage.setItem("tokens", JSON.stringify(responseData));
        reset();
        alert("Сообщение отправлено!");
      } else {
        const errorMessage = error as { data: { message: string } };
        console.error("Error response:", errorMessage);
        alert(errorMessage.data.message || "Unknown error");
      }
    } catch (e) {
      console.error("Unexpected error:", e);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start justify-center flex-col mt-[30px] gap-1   max-w-[350px] w-full"
      >
        <div className="flex text-white flex-col w-[100%] h-[100%]">
          <p className="text-[16px] font-[400]">{t("name")}</p>
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
            {...register("object_us", { required: true })}
            defaultValue=""
            className="w-[100%] h-[32px] px-2 text-[14px] bg-white text-[#383838] outline-none"
          >
            {/* <option value="">Выберите тип шара</option> */}
            <option value="0">{t("option")}</option>
            <option value="1">{t("option1")}</option>
            <option value="2">{t("option2")}</option>
          </select>
        </div>
        <div className="flex text-white flex-col w-[100%] h-[100%]">
          <p className="text-[16px] font-[400]">{t("message")}</p>
          <input
            {...register("message", { required: true })}
            className="w-[100%] h-[32px] px-2 text-[14px] text-[#383838] outline-none"
            type="text"
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
    </div>
  );
};

export default ContactFeedback;
