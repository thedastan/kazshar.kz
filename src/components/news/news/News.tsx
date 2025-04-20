"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { useGetCardsQuery } from "@/redux/api/cards";
import useTypedLocale from "@/hooks/useLocale";
import { useTranslations } from "next-intl";

const Skeleton = () => (
  <div className="flex flex-col gap-[5px]">
    <div className="w-full h-[240px] bg-gray-300 animate-pulse rounded-[10px]"></div>
    <div className="w-[50%] h-[14px] bg-gray-300 animate-pulse rounded-[10px]"></div>
    <div className="w-[70%] h-[14px] bg-gray-300 animate-pulse rounded-[10px]"></div>
  </div>
);

const News = () => {
  const [modal, setModal] = useState<number | null>(null);
  const locale = useTypedLocale();
  const t = useTranslations("News");

  const { data, isLoading } = useGetCardsQuery();

  console.log(data, "new");

  const item = data?.find((el) => el.id === modal);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="py-10 bg-[#1d1d1d] relative">
      <div className="container">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[340px] overflow-hidden rounded-[4px]"
                  >
                    <Skeleton />
                  </div>
                ))
            : data?.map((el, index) => (
                <div
                  key={el.id}
                  data-aos-delay={index * 200}
                  className="w-full relative flex flex-col justify-start items-center"
                >
                  <div className="w-full h-[300px] relative">
                    <Image fill objectFit="cover" src={el.image} alt="img" />
                  </div>
                  <h1 className="font-[600] w-full mt-4 text-[18px] text-start text-[#ffffff]">
                    {el.title}
                  </h1>
                  <p className="font-[400] w-full pb-16 text-[18px] text-start mt-4 text-[#aaaaaa]">
                    {el.description.length > 100
                      ? `${el.description.slice(0, 100)}...`
                      : el.description}
                  </p>

                  <div className="flex mt-10 absolute bottom-0 w-full justify-between items-center">
                    <button
                      onClick={() => setModal(el.id)}
                      className="text-white bg-[#ff2828] rounded-[5px] py-2 px-4 font-[400] text-[18px] flex items-center gap-1"
                    >
                      {t("btn")}
                    </button>
                    <p className="font-[400] text-[18px] text-end text-[#c5c5c5]">
                      {new Date(el.data_create).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {item && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-[#303030] p-6 rounded-lg w-full  md:w-[800px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex md:flex-row flex-col gap-4">
              <div className="w-full h-[300px] relative overflow-hidden rounded-[10px]">
                <Image fill objectFit="cover" src={item.image} alt="img" />
              </div>
              <div className="w-full relative">
                <h1 className="font-[600] w-full mt-4 text-[18px] text-start text-[#ffffff]">
                  {item.title}
                </h1>
                <p className="font-[400] w-full pb-16 text-[18px] text-start mt-4 text-[#aaaaaa]">
                  {item.description}
                </p>
                <div className="flex mt-10 absolute bottom-0 w-full justify-between items-center">
                  <p className="font-[400] text-[18px] text-end text-[#c5c5c5]">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setModal(null)}
                    className="text-white cursor-pointer bg-[#ff2828] rounded-[5px] py-2 px-4 font-[400] text-[18px] flex items-center gap-1"
                  >
                    {t("btn2")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
 
 