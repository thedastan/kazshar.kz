import Product from "@/components/product/Product";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Ассортимент продукции KazShar | KazShar Product Range | KazShar өнімдерінің ассортименті ",
  description:
    "Кованые, Литые и Катаные мелющие шары в KazShar | Forged, Cast, and Rolled Grinding Balls at KazShar | KazShar-да соғылған, құйылған және илекленген ұнтақтау шарлары ",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title:
      "Ассортимент продукции KazShar | KazShar Product Range | KazShar өнімдерінің ассортименті ",
    description:
      "Кованые, Литые и Катаные мелющие шары в KazShar | Forged, Cast, and Rolled Grinding Balls at KazShar | KazShar-да соғылған, құйылған және илекленген ұнтақтау шарлары ",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const ProductsPage = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductsPage;
