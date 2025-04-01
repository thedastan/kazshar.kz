"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const pathname = usePathname();

  const { locale } = useParams();

  const t = useTranslations("Footer");

  //   const productPath = locale ? `/${locale}/products` : "/products";

  const isHomePage = pathname === `/${locale}` || pathname === "/";
  const isProductsPage = pathname.startsWith(`/${locale}/products`);
  const isContactPage = pathname.startsWith(`/${locale}/contact`);

  if (isHomePage || isProductsPage || isContactPage) {
    return (
      <div>
        <Link
          href="https://wa.me/7716380820"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button2"
        >
          <IoLogoWhatsapp />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#000000]">
      <Link
        href="https://wa.me/0708805080"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <IoLogoWhatsapp />
      </Link>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-3 py-4">
          <p className="text-[#b4b4b4] text-center text-[16px]">
            {t("text1")}
          </p>
          <p className="text-[#b4b4b4] text-center text-[16px]">
          {t("text2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
