"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <div className="hidden"></div>;
  }

  return (
    <div className="bg-[#000000]">
      <Link 
        href="https://wa.me/708805080"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button">
        <IoLogoWhatsapp />
      </Link>

      <div className="container">
        <div className="flex justify-between py-4">
          <p className="text-[#b4b4b4] text-[16px]">© 2012 - 2025 Все права защищены.</p>
          <p className="text-[#b4b4b4] text-[16px]">Разработал Motion Web LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
