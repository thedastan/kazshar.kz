import ContactComponents from "@/components/contact/ContactComponents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Связаться с KazShar | Contact KazShar | KazShar-мен байланысу",
  description:
    "Свяжитесь с нами — компания Казшар: ваш надежный партнер в сфере металлопродукции | Get in touch with us — KazShar company: your reliable partner in the metal products industry | Бізбен байланысыңыз — КазШар компаниясы: металл өнімдері саласындағы сенімді серіктесіңіз",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title: "Связаться с KazShar | Contact KazShar | KazShar-мен байланысу",
    description:
      "Свяжитесь с нами — компания Казшар: ваш надежный партнер в сфере металлопродукции | Get in touch with us — KazShar company: your reliable partner in the metal products industry | Бізбен байланысыңыз — КазШар компаниясы: металл өнімдері саласындағы сенімді серіктесіңіз",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactComponents />
    </div>
  );
};

export default ContactPage;
