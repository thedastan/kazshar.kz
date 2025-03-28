"use client";
import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import HeroMenu from "./HeroMenu";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const t = useTranslations("Hero");

  return (
    <>
      <div className="relative w-[100%] h-[700px] md:h-[100vh]">
        <div className="w-full h-[700px] md:h-[100vh]">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/metal.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex px-[20px] sm:px-16 bg-[#000000b0] gap-[60px] absolute top-0 left-0 w-[100%] h-[700px] md:h-[100vh] justify-end items-start flex-col">
          <div className="">
            <h1 className="md:text-[54px] text-[26px] text-[#ffffff8f] font-[700]  w-full md:w-[760px] leading-[40px] sm:leading-[70px] text-start">
              {t("title")}
            </h1>
            <p className="mt-[20px] text-white text-start leading-8 font-[400] text-[18px] md:text-[22px] w-full sm:w-[640px]">
              {t("description")}
            </p>
          </div>

          <div className="flex mt-20 md:mt-32">
            <div className="flex  items-start gap-3">
              <button
                onClick={() => setModal(true)}
                className="text-[18px] items-center gap-2 flex text-[#ffffff8f] font-[700] w-full md:w-[760px] leading-[70px] text-start"
              >
                <IoPlay size={32} /> {t("watching")}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute md:block hidden top-0 right-0  z-10 h-full bg-[#000000c0]   ${
            isSidebarOpen ? "w-[300px]" : "w-20"
          }`}
          style={{ transition: "1s" }}
          onMouseEnter={() => setSidebarOpen(true)}
          onMouseLeave={() => setSidebarOpen(false)}
        >
          <div className="h-full">
            <HeroMenu isSidebarOpen={isSidebarOpen} />
          </div>
        </div>

        {modal && (
          <div
            className="fixed inset-0  bg-black bg-opacity-80  flex items-center justify-center z-50"
            onClick={() => setModal(false)}
          >
            <div
              className=" bg-transparent md:bg-[#303030] p-0 md:p-6 rounded-lg w-full md:w-[90%] h-[300px] md:h-[97vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-white text-2xl"
                onClick={() => setModal(false)}
              >
                <IoMdClose />
              </button>
              <video
                autoPlay
                controls
                className="w-full h-full rounded-lg mt-10 md:mt-4"
              >
                <source src="/metal.mp4" type="video/mp4" />
                {t("no_watching")}
              </video>
            </div>
          </div>
        )}
      </div>

      <div className="flex md:hidden">
        <div
          className="bg-[#000000c0] w-full"
          style={{ transition: "1s" }}
          onMouseEnter={() => setSidebarOpen(true)}
          onMouseLeave={() => setSidebarOpen(false)}
        >
          <div className="h-full">
            <HeroMenu isSidebarOpen={isSidebarOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
