import React from "react";
import AboutComponent from "@/components/about/AboutComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании KazShar | About KazShar | KazShar компаниясы туралы",
  description:
    "Наш завод был основан в 2024 году с целью создания высококачественной продукции для металлургической и горнодобывающей отраслей. Мы начали свой путь как небольшое предприятие, но благодаря внедрению современных технологий и профессионализму нашей команды, смогли стать одним из ведущих производителей мелющих шаров в Казахстане. | Our factory was founded in 2024 with the goal of producing high-quality products for the metallurgical and mining industries. We started as a small enterprise, but thanks to the implementation of modern technologies and the professionalism of our team, we have become one of the leading producers of grinding balls in Kazakhstan. | Біздің зауыт 2024 жылы металлургиялық және тау-кен өнеркәсібі үшін жоғары сапалы өнімдер өндіру мақсатында құрылды. Біз шағын кәсіпорын ретінде бастадық, бірақ заманауи технологияларды енгізу және біздің команданың кәсібилігінің арқасында Қазақстандағы жетекші ұнтақтау шарларын өндірушілердің біріне айналдық.",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title: "О компании KazShar | About KazShar | KazShar компаниясы туралы",
    description:
      "Наш завод был основан в 2024 году с целью создания высококачественной продукции для металлургической и горнодобывающей отраслей. Мы начали свой путь как небольшое предприятие, но благодаря внедрению современных технологий и профессионализму нашей команды, смогли стать одним из ведущих производителей мелющих шаров в Казахстане. | Our factory was founded in 2024 with the goal of producing high-quality products for the metallurgical and mining industries. We started as a small enterprise, but thanks to the implementation of modern technologies and the professionalism of our team, we have become one of the leading producers of grinding balls in Kazakhstan. | Біздің зауыт 2024 жылы металлургиялық және тау-кен өнеркәсібі үшін жоғары сапалы өнімдер өндіру мақсатында құрылды. Біз шағын кәсіпорын ретінде бастадық, бірақ заманауи технологияларды енгізу және біздің команданың кәсібилігінің арқасында Қазақстандағы жетекші ұнтақтау шарларын өндірушілердің біріне айналдық.",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  );
};

export default AboutPage;
