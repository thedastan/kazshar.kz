import { useProposalMutation } from "@/redux/api/contact";
import { useTranslations } from "next-intl";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ContactFormData = {
  id: number;
  client_name: string;
  email: string;
  object_choices: number;
  message: string;
};

const ContactRfc = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [contactDataRfc] = useProposalMutation();
  const t = useTranslations("Contact");

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const { object_choices, ...restData } = data;
      const contactPayload = {
        ...restData,
        object_choices: object_choices.toString(),
      };

      console.log("RFC", contactPayload);

      const { data: responseData, error } = await contactDataRfc(
        contactPayload
      );

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
    <div className="">
      <div className="flex flex-col items-center  gap-1   max-w-[350px] w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
    </div>
  );
};

export default ContactRfc;
