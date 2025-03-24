import { useTranslations } from "next-intl";
import React from "react";
import { FaMountainCity } from "react-icons/fa6";
import { GiChemicalTank, GiConcreteBag, GiMetalPlate } from "react-icons/gi";
import { PiLightningAFill } from "react-icons/pi";

const Used = () => {
  const t = useTranslations("Forget");

  const data = [
    {
      num: "1",
      icon: <FaMountainCity />,
      title: t("card"),
    },
    {
      num: "2",
      icon: <GiConcreteBag />,
      title: t("card2"),
    },
    {
      num: "3",
      icon: <PiLightningAFill />,
      title: t("card3"),
    },
    {
      num: "4",
      icon: <GiChemicalTank />,
      title: t("card4"),
    },
    {
      num: "5",
      icon: <GiMetalPlate />,
      title: t("card5"),
    },
  ];
  return (
    <div className="py-20">
      <div className="container">
        <div className="md:flex block justify-between">
          <div className="">
            <h1 className="md:text-[40px] md:text-start text-center text-[23px] text-[#c71212] font-semibold mb-4">
              {t("used")}
            </h1>
          </div>
          <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.map((el, index) => (
              <div
                key={index}
                className="md:w-[300px] w-full flex justify-center md:items-start items-center flex-col "
              >
                <h1 className="text-[60px] text-[#c71212]">{el.icon}</h1>
                <div className="flex items-start mt-3">
                  <h3 className="border-l-2 pb-2 px-2 text-[20px] border-[#929292] text-[#686868]">
                    {el.num}
                  </h3>
                  <h3 className="text-[18px] w-[200px] font-[600]">
                    {el.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Used;
