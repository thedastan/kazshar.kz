"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import { useGetGalleryQuery } from "@/redux/api/cards";
import { useTranslations } from "next-intl";

// Скелет для изображений
const Skeleton = () => (
  <div className="w-full h-[340px] bg-gray-300 animate-pulse rounded-[4px]"></div>
);

const Gallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const t = useTranslations("About");

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="py-20">
      <div className="container">
        <h1 className="md:text-[40px] text-[26px] pb-10 font-[700] text-center">
          {t("gallery")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {isLoading
            ? Array(6)
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
                <Link
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  href={el.gallery_image}
                  data-fancybox="gallery"
                  className="relative w-full h-[340px] overflow-hidden rounded-[4px] block"
                >
                  <Image
                    fill
                    className="object-cover"
                    src={el.gallery_image}
                    alt="img"
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
