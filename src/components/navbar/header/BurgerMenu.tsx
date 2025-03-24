"use client";

import Link from "next/link";

import { getLinksNav } from "../data";
import {
  PHONE_NUMBER,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/constants/admin";
import Language from "./Language";
import { useTranslations } from "next-intl";

const BurgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "menu-overlay") {
      setIsOpen(false);
    }
  };

  const t = useTranslations("HeroMenu");
  const links = getLinksNav(t);

  return (
    <div
      id="menu-overlay"
      onClick={handleOutsideClick}
      className={`fixed top-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-[100vh] z-40 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-[80%] h-full bg-white p-6 flex flex-col gap-4 shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="self-end" onClick={() => setIsOpen(false)}>
          {/* <X />  */}X
        </button>

        <div className="flex flex-col gap-2 mt-8 text-center">
          <Language />

          {links.map((el, index) => (
            <Link
              key={index}
              href={el.path}
              onClick={() => setIsOpen(false)}
              className="font-normal text-[14px] uppercase"
            >
              {el.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Link
            onClick={() => setIsOpen(false)}
            href={`tel:${PHONE_NUMBER}`}
            className="w-full flex bg-white gap-3 text-[16px] font-normal text-black h-[40px] justify-center items-center rounded-[12px] border border-black"
          >
            {/* <PhoneSvg /> */}
            {PHONE_NUMBER}
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            href={WHATSAPP_LINK}
            target="_blank"
            className="w-full flex bg-white gap-3 text-[16px] font-normal text-black h-[40px] justify-center items-center rounded-[12px] border border-black"
          >
            {/* <WhatsappSvg /> */}
            {WHATSAPP_NUMBER}
          </Link>
        </div>

        <div className="w-full flex justify-center mt-4">
          <Link href="/">
            {/* <Image
							className='w-[140px]'
							onClick={() => setIsOpen(false)}
							src={logo}
							alt='logo'
						/> */}
            logo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
