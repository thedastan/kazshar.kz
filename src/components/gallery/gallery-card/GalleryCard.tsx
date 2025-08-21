"use client";

import React, { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/cards";

const GalleryCard = () => {
  const { data } = useGetGalleryQuery();
  console.log(data, "data data");

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320; // чуть больше чем карточка
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div id="slider" className="py-20">
      <div className="container mx-auto">
        <div className="relative">
          {/* Кнопки */}
          <div className="flex justify-end absolute w-full gap-10 top-0 -translate-y-1/2 z-10 px-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex border border-gray-400 items-center justify-center bg-white rounded-full shadow"
            >
              <BsChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex border border-gray-400 items-center justify-center bg-white rounded-full shadow"
            >
              <BsChevronRight size={24} />
            </button>
          </div>

          {/* Скролл контейнер */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth hide-scrollbar"
          >
            <div className="flex gap-4 py-4 px-4 w-max mt-6">
              {data?.map((el, index) => (
                <div key={index} className="w-[300px] shrink-0">
                  <a href={el.gallery_image} data-fancybox="gallery">
                    <div className="relative w-full h-[350px] rounded-md overflow-hidden">
                      <Image
                        src={el.gallery_image}
                        fill
                        style={{ objectFit: "cover" }}
                        alt={`gallery-${index}`}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
