import img from "@/assets/Литые.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutCast = () => {
  const t = useTranslations("Cast");
  return (
    <div className="">
      <div className="md:w-full w-[320px] flex ">
        <div className="bg-[#ff2828] flex flex-col items-start md:py-10 px-2 md:px-20 mt-[-40px] justify-start relative w-full">
          <h1 className="text-[18px] flex justify-end   text-[#ffffff] font-[700] w-full md:w-[600px] p-6 leading-[26px] text-start">
            {t("des")}
          </h1>
          <p className="text-[16px] flex justify-start pb-6  text-[#d4d4d4] font-[500] w-full md:w-[500px] px-6 leading-[26px] text-start">
            {t("des2")}
          </p>
        </div>
        <div className="w-full md:flex hidden" />
      </div>
      <div className="w-full flex  justify-end">
        <div className="w-full md:flex hidden" />
        <div className="  flex items-end  mt-0   md:mt-[-250px] justify-start relative w-full">
          <div className="md:w-[600px] w-full mt-10 md:mt-0 h-[450px] relative">
            <Image fill objectFit="cover" src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCast;
