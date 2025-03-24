import RolledComponent from "@/components/rolled/RolledComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Катаные мелющие шары | Rolled Grinding Balls | Қалған ұнтақтаушы шарлар",
  description:
    "Катаные шары изготавливаются методом горячей прокатки из высококачественных стальных прутков на шаропрокатных станах, что обеспечивает их высокую прочность и равномерную структуру. | Rolled balls are made using the hot rolling method from high-quality steel bars on ball-rolling mills, ensuring their high strength and uniform structure. | Қалған шарлар жоғары сапалы болат таяқшалардан ыстық илемдеу әдісімен жасалады, бұл олардың жоғары беріктігін және біркелкі құрылымын қамтамасыз етеді.",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title:
      "Катаные мелющие шары | Rolled Grinding Balls | Қалған ұнтақтаушы шарлар",
    description:
      "Катаные шары изготавливаются методом горячей прокатки из высококачественных стальных прутков на шаропрокатных станах, что обеспечивает их высокую прочность и равномерную структуру. | Rolled balls are made using the hot rolling method from high-quality steel bars on ball-rolling mills, ensuring their high strength and uniform structure. | Қалған шарлар жоғары сапалы болат таяқшалардан ыстық илемдеу әдісімен жасалады, бұл олардың жоғары беріктігін және біркелкі құрылымын қамтамасыз етеді.",

    url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
    type: "website",
  },
};

const RolledPage = () => {
  return (
    <div>
      <RolledComponent />
    </div>
  );
};

export default RolledPage;
