import { useTranslations } from "next-intl";
import React from "react";

const Control = () => {
  const t = useTranslations("Create");

  const data = [
    {
      num: "01",
      title: t("quality"),
      desc: t("quality_des"),
    },
    {
      num: "02",
      title: t("quality2"),
      desc: t("quality_des2"),
    },
    {
      num: "03",
      title: t("quality3"),
      desc: t("quality_des3"),
    },
    {
      num: "04",
      title: t("quality4"),
      desc: t("quality_des4"),
    },
    {
      num: "05",
      title: t("quality5"),
      desc: t("quality_des5"),
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-[30px] text-center font-[700]">{t("controll")}</h1>
        <div className="grid grid-cols-1 justify-center mt-20 items-start gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {data.map((el, index) => (
            <div
              key={index}
              style={{
                transition: "0.5s",
              }}
              className="flex flex-col lg:flex-row group hover:bg-[#ff2828] md:minH-[320px] minH-[360px] h-full p-6 justify-start items-start md:items-start lg:items-center gap-4"
            >
              <h1
                id="text_bg"
                className="text-[160px] leading-[130px]   font-[900]  "
              >
                {el.num}
              </h1>
              <div>
                <h2 className="md:text-[30px] text-[22px] group-hover:text-white leading-[34px] font-[700] text-[#ff2828]">
                  {el.title}
                </h2>
                <p className="text-gray-500 mt-2 group-hover:text-white text-[18px]">
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-20">
          <p className="text-[18px] w-[600px] text-center  text-[#575757] font-[400] ">
            {t("controll_des")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Control;
