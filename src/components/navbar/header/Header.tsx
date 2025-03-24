"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { getLinksNav } from "../data";
import BurgerMenu from "./BurgerMenu";
import { PHONE_NUMBER } from "@/constants/admin";
import { CgMenuRight } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Language from "./Language";
import { useTranslations } from "next-intl";

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { locale } = useParams();

  const t = useTranslations("HeroMenu");
  const links = getLinksNav(t);

  console.log(isOpen);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isHomePage = pathname === `/${locale}` || pathname === "/";
  const isProductsPage = pathname.startsWith(`/${locale}/products`);
  const isContactPage = pathname.startsWith(`/${locale}/contact`);

  if (isHomePage || isProductsPage || isContactPage) {
    return (
      <div className="fixed z-10 w-full">
        <div className="container">
          <div className="py-4">
            <h1 className="text-[40px] font-[800] text-[#ffffff8f]">
              <Link href={"/"}>
                <Image className=" w-[180px]" src={logo} alt="logo" />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="bg-white w-full h-[74px]">
      <div className="bg-white border-b-2 border-grey-500 w-full h-[74px] fixed z-20">
        <div className="container">
          <div className="flex justify-between items-center w-full h-[74px]">
            <div className="flex justify-start">
              <Link href={"/"}>
                <Image className="w-[180px]" src={logo} alt="logo" />
              </Link>

              <div></div>
            </div>

            <div className="hidden sm:flex justify-center gap-6 w-full">
              {links.map((el, index) => (
                <div key={index} className="relative">
                  <Link
                    href={el.path}
                    className={`font-normal text-[14px] uppercase ${
                      pathname === el.path
                        ? "border-b-2 border-[#ff2828] text-[#ff2828]"
                        : ""
                    }`}
                  >
                    {el.title}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center justify-end">
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="w-[48px] h-[48px] flex justify-center items-center bg-[#F4F5F6] rounded-[12px]"
                >
                  <CgMenuRight />
                </button>
              </div>

              <div className="hidden sm:flex">
                <Language />
              </div>

              <div className="hidden sm:flex border-[2px] rounded-[10px] px-1 border-[#ff2828]">
                <Link
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-[180px] flex gap-2 bg-white text-[16px] text-[#ff2828] font-normal h-full py-1 justify-center items-center rounded-[12px] border-1 border-black"
                >
                  <FaPhoneAlt /> {PHONE_NUMBER}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
