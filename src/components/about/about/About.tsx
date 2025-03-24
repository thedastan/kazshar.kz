import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import { useTranslations } from "next-intl";

import Image from "next/image";

const About = () => {
  const t = useTranslations("About");

  return (
    <div>
      <div className="container">
        <div className=" pb-20 md:pb-0 py-0 md:py-20">
          <div className="flex md:flex-row flex-col">
            <div className="w-full flex justify-center items-center h-[500px]  ">
              <div className="md:p-14 p-0">
                <h1 className="md:text-[30px] text-[20px] font-[700]">
                  {t("histori")}
                </h1>
                <div className="flex items-center mt-4 gap-4">
                  <div className="w-4 md:h-[220px]  md:flex hidden h-[320px] bg-[#ff2828]" />
                  <p className="text-[18px] text-[#575757] font-[400] ">
                    {t("histori_description")}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className=" relative w-full h-[300px] md:h-[500px]"
            >
              <Image fill objectFit="cover" src={img1} alt="img" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse">
            <div
              data-aos="fade-up"
              className=" relative w-full h-[300px] md:h-[500px]"
            >
              <Image fill objectFit="cover" src={img2} alt="img" />
            </div>
            <div className="w-full flex justify-center items-center h-[500px]  ">
              <div className="md:p-14 p-0">
                <h1 className="md:text-[30px] text-[20px]  font-[700]">
                  {t("task")}
                </h1>
                <div className="flex items-center mt-4 gap-4">
                  <div className="w-4 md:flex hidden md:h-[220px] h-[220px] bg-[#ff2828]" />
                  <p className="text-[18px] text-[#575757] font-[400] ">
                    {t("task_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#1d1d1d] py-20">
        <div className="container">
          <div className="md:flex block gap-6 items-center">
            <div
              id="abouts"
              className="   relative w-full md:w-[70%] md:h-[400px] h-[300px] overflow-hidden rounded-[4px]"
            >
              {/* <Image fill objectFit="cover" src={img1} alt="img" /> */}
            </div>
            <div className="w-full flex flex-col gap-4">
              <h1 className="md:text-[40px] mt-4 md:mt-0 text-[26px]  font-[700] text-white">
                {t("today")}
              </h1>
              <h4 className="text-[18px]  font-[500] text-white">
                {t("today_description")}
              </h4>
              <p className="text-[18px]  font-[500] text-white">
                {t("today_description2")}
              </p>

              <p className="text-[18px]  font-[500] text-white flex gap-[5px]">
                <span className="text-[18px] font-[600] ">
                  {t("today_span")}
                </span>
                {t("today_tonn")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
