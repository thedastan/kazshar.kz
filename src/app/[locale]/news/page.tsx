import NewsComponent from "@/components/news/NewsComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Последние события в металлургической отрасли | Latest Events in the Metallurgical Industry | Металлургия саласындағы соңғы оқиғалар ",
  description:
    "Свежие новости о производстве, ценах и инновациях в сфере металлопродукции. | Latest news on production, prices, and innovations in the metal products sector. | Металл өнімдері саласындағы өндіріс, баға және инновациялар туралы соңғы жаңалықтар.",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title:
      "Последние события в металлургической отрасли | Latest Events in the Metallurgical Industry | Металлургия саласындағы соңғы оқиғалар ",
    description:
      "Свежие новости о производстве, ценах и инновациях в сфере металлопродукции. | Latest news on production, prices, and innovations in the metal products sector. | Металл өнімдері саласындағы өндіріс, баға және инновациялар туралы соңғы жаңалықтар.",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const NewsPage = () => {
  return (
    <div>
      <NewsComponent />
    </div>
  );
};

export default NewsPage;
