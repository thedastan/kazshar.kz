"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactRfc from "./ContactRfc";
import ContactFeedback from "./ContactFeedback";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const t = useTranslations("Contact");

  // <div className="flex flex-col md:flex-row  md:items-none h-full md:h-[100%] ">
  //       <div className="bg-[rgb(199,18,18)] md:h-[95vh] px-[50px]  w-[100%] md:w-[70%] flex flex-col items-center">
  //         <div className="w-[100%] flex justify-center mt-[100px] md:mt-[80px]">
  //           <h1 className="text-[22px] md:text-[32px] font-[600] text-white">
  //             {t("contact_title")}
  //           </h1>
  //         </div>

  //         <div className="py-[10px]">
  //           <div className="">
  //             <ContactFeedback />
  //           </div>
  //         </div>
  //       </div>

  return (
    <div>
      <div className="flex flex-col md:flex-row  md:items-none h-full md:h-[100%] ">
        <div className="bg-[rgb(199,18,18)] flex flex-col md:flex-row">
          <div className="bg-[rgb(199,18,18)] h-[100%] md:h-[100vh] px-[50px] pt-14  w-[100%] md:w-[70%] flex flex-col items-center">
            <div className="w-[100%] flex justify-center mt-[100px] md:mt-[80px]">
              <h1 className="text-[22px] md:text-[32px] font-[600] text-white">
                {t("contact_title")}
              </h1>
            </div>

            <div className="py-[10px]">
              <div className="">
                <ContactFeedback />
              </div>
            </div>
          </div>

          <div className="bg-[rgb(199,18,18)] md:h-[100vh] h-full px-[50px] py-[30px]  md:w-[50%] flex flex-col items-center">
            <div className="mt-[40px] md:mt-[124px] flex items-start justify-start flex-wrap gap-4 max-w-[100%] w-full">
              <div className="flex gap-2 text-white">
                <h1 className="text-[22px]">
                  <MdOutlineMailOutline />
                </h1>
                <div className="">
                  <h1 className="">saleskazshar@gmail.com</h1>
                </div>
              </div>
              <div className="flex gap-2 text-white">
                <h1 className="text-[22px]">
                  <FiPhone />
                </h1>
                <div className="">
                  <h1 className="">+7 771 251 0703</h1>
                </div>
              </div>
              <div className="flex gap-2 text-white">
                <h1 className="text-[22px]">
                  <FaWhatsapp />
                </h1>
                <div className="">
                  <h1 className="">+7 771 638 0820</h1>
                </div>
              </div>

              <div className="flex gap-2 text-white">
                <h1 className="text-[22px]">
                  <FiMapPin />
                </h1>
                <div className="">
                  <h1 className="">{t("address")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] hidden md:block h-[500px] md:h-[100vh]">
          <iframe
            className="w-[100%] h-[100%]"
            src="/map.html"
            frameBorder="0"
            scrolling="no"
            title="Map on 2GIS"
          ></iframe>
        </div>
        <div className="w-[100%] h-[500px] md:hidden block md:h-[100vh]">
          <iframe
            className="w-[100%] h-[100%]"
            src="/mapmobile.html"
            frameBorder="0"
            scrolling="no"
            title="Map on 2GIS"
          ></iframe>
        </div>
      </div>
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-[#c71212] p-10   rounded-lg w-full flex  justify-center md:w-[500px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactRfc />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
