import { useTranslations } from "next-intl";
import React from "react";

const Process = () => {
  const t = useTranslations("Create");

  const data = [
    {
      num: "01",
      title: t("process"),
      desc: t("process_des"),
    },
    {
      num: "02",
      title: t("process2"),
      desc: t("process_des2"),
    },
    {
      num: "03",
      title: t("process3"),
      desc: t("process_des3"),
    },
    {
      num: "04",
      title: t("process4"),
      desc: t("process_des4"),
    },
    {
      num: "05",
      title: t("process5"),
      desc: t("process_des5"),
    },
    {
      num: "06",
      title: t("process6"),
      desc: t("process_des6"),
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[30px] text-center font-[700]">
            {t("production")}
          </h1>
          <p className="text-[18px] w-full md:w-[600px] text-center text-[#575757] font-[400] ">
            {t("production_des")}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-20 justify-start items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {data.map((el, index) => (
            <div
              key={index}
              style={{
                transition: "0.5s",
              }}
              className="flex group hover:bg-[#ff2828] p-6 md:minH-[320px] minH-[360px] h-full flex-col justify-start items-start gap-4"
            >
              <h1
                id="text_bg"
                className="text-[160px] leading-[130px]   font-[900]  "
              >
                {el.num}
              </h1>
              <div className="">
                <h2 className="text-[30px]  group-hover:text-white font-[700] text-[#ff2828]">
                  {el.title}
                </h2>
                <p className="text-gray-500 group-hover:text-white text-[18px]">
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-20">
          <p className="text-[18px] w-[600px] text-center  text-[#575757] font-[400] ">
            {t("production_des2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
