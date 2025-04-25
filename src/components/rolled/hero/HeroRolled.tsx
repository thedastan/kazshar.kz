import { getLinksProducts } from "@/components/navbar/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const HeroRolled = () => {
  const language = useTranslations("HeroMenu");
  const t = useTranslations("Rolled");
  const links = getLinksProducts(language);
  return (
    <div className="relative w-[100%] h-[500px] overflow-hidden">
      <div className="w-full h-[500px] overflow-hidden">
				<iframe
					className="absolute top-0 left-0 w-full h-full    md:scale-[1.2] scale-[4.9]"
					style={{ objectFit: "cover" }}
					src="https://kinescope.io/embed/8cEfSExVYPMjFiJ1YQiGX6"
					allow="autoplay; muted"
				/>
			</div>

      <div className="flex px-[20px] md:px-16 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
        <div className="">
          <h1 className="md:text-[54px] text-[30px] text-[#ffffff8f] font-[700] w-full md:w-[760px] md:leading-[70px] leading-[50px] text-center">
            {t("title")}
          </h1>
        </div>
      </div>

      <div
        className="w-[160px] h-full hover:bg-[#ff2828] hover:w-[200px] bg-[#000000cc] absolute hidden md:flex justify-center items-center right-0 top-0"
        style={{
          transition: "0.5s",
        }}
      >
        <div className="flex flex-col md:flex-row   justify-center items-center  h-full w-full gap-6">
          {links.slice(0, 1).map((el, index) => (
            <Link key={index} className="w-full" href={el.path}>
              <div
                style={{
                  transition: "0.5s",
                }}
                className=" bg-transparent w-full   py-6 p-4 "
              >
                <div className="flex text-start flex-col   items-start justify-center  w-full gap-4">
                  <h1 className="text-white w-[150px] mt-4 text-start text-[18px] font-[600] ">
                    {el.title}
                  </h1>
                  <button
                    style={{ transition: "0.3s" }}
                    className="flex items-center justify-center gap-2 w-[110px] h-[40px] font-[600]  text-[#fff] border-[1px] border-[#fff] hover:bg-[#fff] hover:text-[#ff2828]"
                  >
                    {t("btn")}
                    <CgArrowLongRight />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroRolled;
