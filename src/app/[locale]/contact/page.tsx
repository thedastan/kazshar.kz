import ContactComponents from "@/components/contact/ContactComponents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Связаться с Kazshar",
  description:
    "Свяжитесь с нами — компания Казшар: ваш надежный партнер в сфере металлопродукции",
  robots: "index, follow",
  authors: [{ name: "Связаться с Kazshar" }],
  openGraph: {
    title: "Связаться с Kazshar",
    description:
      "Свяжитесь с нами — компания Казшар: ваш надежный партнер в сфере металлопродукции",

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
