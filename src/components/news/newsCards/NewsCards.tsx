"use client";
import Image from "next/image";
import img from "@/assets/img1.jpeg";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import { useGetCardsQuery } from "@/redux/api/cards";
import { useTranslations } from "next-intl";

const NewsCards = () => {
  const { data } = useGetCardsQuery();
  const t = useTranslations("HeroNews");
  type Card = NonNullable<typeof data>[number];
  const [selectedNews, setSelectedNews] = useState<Card | null>(null);

  return (
    <section className="w-full min-h-[100vh] py-16">
      <div className="container">
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-8">
          {data?.map((el, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start"
            >
              <div className="w-full">
                <Image src={img} alt="img" />
                <Title className="mt-2">{el.title}</Title>
                <Description>
                  {el.description.length > 100
                    ? el.description.slice(
                        0,
                        el.description.lastIndexOf("", 100)
                      ) + "..."
                    : el.description}
                </Description>
              </div>
              <Button
                onClick={() => setSelectedNews(el)}
                className=" rounded-sm mt-3"
              >
                {t("button")}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)}>
        {selectedNews && (
          <div className="flex md:flex-row flex-col gap-3">
            <div className="md:mt-0 mt-8 relative overflow-hidden rounded-md w-full max-w-[600px] h-[300px]">
              <Image fill objectFit="cover" src={img} alt="img" />
            </div>
            <div className="w-full max-w-[500px] mt-6">
              <Title>{selectedNews.title}</Title>
              <Description className="mt-2">
                {selectedNews.description}
              </Description>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default NewsCards;
