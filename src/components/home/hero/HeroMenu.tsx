import { getLinksNav } from "@/components/navbar/data";
import Language from "@/components/navbar/header/Language";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

import bg1 from "@/assets/img1.jpg";
import bg2 from "@/assets/img2.jpg";
import bg3 from "@/assets/img3.jpg";
import bg4 from "@/assets/about.jpg";
import bg5 from "@/assets/img2.jpg";
import bg6 from "@/assets/img1.jpg";

interface HeroMenuProps {
  isSidebarOpen: boolean;
}
const HeroMenu = ({ isSidebarOpen }: HeroMenuProps) => {
  const t = useTranslations("HeroMenu");
  const links = getLinksNav(t);

  const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

  return (
    <div className="flex z-50 flex-col items-start h-full justify-between   ">
      <div className="hidden md:flex z-50 px-2 flex-col w-full  pt-6 items-start justify-center gap-4">
        <Language />

        {links.map((el, index) => (
          <Link key={index} className="w-full" href={el.path}>
            <div
              style={{
                transition: "0.1s",
              }}
              className="flex items-center group  p-2 w-full gap-4"
            >
              <div className="text-[#6b6b6b]  group-hover:text-white text-3xl">
                {el.icon}
              </div>
              <div
                style={{
                  width: isSidebarOpen ? "100%" : "0",
                  transition: "1s",
                }}
                className=" overflow-hidden h-6"
              >
                <h2
                  className="text-[#6b6b6b] group-hover:text-white"
                  style={{
                    marginTop: isSidebarOpen ? "0px" : "40px",
                    transition: "0.4s",
                  }}
                >
                  {el.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex md:hidden flex-col w-full items-start justify-center gap-[1px]">
        {links.map((el, index) => (
          <Link
            key={index}
            style={{
              backgroundImage: `url(${
                backgrounds[index % backgrounds.length].src
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            className="w-full py-10"
            href={el.path}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative flex items-center group px-4 w-full gap-4">
              <div className="text-white text-3xl">{el.icon}</div>
              <h1 className="text-white text-2xl">{el.title}</h1>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-[#c71212] w-full p-2">
        <Link className="w-full" href="/products">
          <div
            style={{
              transition: "0.1s",
            }}
            className="flex items-center justify-end group pr-4 w-full"
          >
            <div
              style={{
                width: isSidebarOpen ? "100%" : "0",
                transition: "1s",
              }}
              className=" overflow-hidden h-6 pl-4"
            >
              <h2
                className=" text-white"
                style={{
                  marginTop: isSidebarOpen ? "0px" : "40px",
                  transition: "1s",
                }}
              >
                {t("learn")}
              </h2>
            </div>

            <div className=" text-white   text-3xl">
              <LuMoveRight size={32} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroMenu;
