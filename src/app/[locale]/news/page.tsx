import NewsComponents from '@/components/news/NewsComponents';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "О компании Kazshar",
  description:
    "Наш завод был основан в 2024 году с целью создания высококачественной продукции для металлургической и горнодобывающей отраслей. Мы начали свой путь как небольшое предприятие, но благодаря внедрению современных технологий и профессионализму нашей команды, смогли стать одним из ведущих производителей мелющих шаров в Казахстане.",
  robots: "index, follow",
  authors: [{ name: "О компании Kazshar" }],
  openGraph: {
    title: "О компании Kazshar ",
    description:
      "Наш завод был основан в 2024 году с целью создания высококачественной продукции для металлургической и горнодобывающей отраслей. Мы начали свой путь как небольшое предприятие, но благодаря внедрению современных технологий и профессионализму нашей команды, смогли стать одним из ведущих производителей мелющих шаров в Казахстане.",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const NewsPage = () =>  <NewsComponents/>
export default NewsPage;