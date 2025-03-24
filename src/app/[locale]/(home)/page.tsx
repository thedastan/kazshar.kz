import Hero from "@/components/home/hero/Hero";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title:
    "Сила определяется тем, что за ней скрывается. | The strength is defined by what is hidden behind it. | Күш оның артында не жасырылғанына байланысты анықталады. ",
  description:
    "И каждая конструкция надежна настолько, насколько надежны ее структура и фундамент. | And every structure is as reliable as its structure and foundation. | Әр құрылым оның құрылымы мен негізі қаншалықты сенімді болса, соншалықты сенімді. ",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title:
      "Сила определяется тем, что за ней скрывается. | The strength is defined by what is hidden behind it. | Күш оның артында не жасырылғанына байланысты анықталады. ",
    description:
      "И каждая конструкция надежна настолько, насколько надежны ее структура и фундамент. | And every structure is as reliable as its structure and foundation. | Әр құрылым оның құрылымы мен негізі қаншалықты сенімді болса, соншалықты сенімді. ",
    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const Home = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://metallomir.kg/" />
        <meta name="author" content="ОсОО Металломир" />

        <meta
          property="og:image"
          content="https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg"
        />

        <meta property="og:type" content="website" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
