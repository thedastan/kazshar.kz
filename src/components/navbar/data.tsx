import { FaCircle, FaPhoneAlt } from "react-icons/fa";
import { IoIosAddCircle, IoIosBookmarks } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { PiNewspaperFill } from "react-icons/pi";

import image1 from "@/assets/Кованые.jpg"
import image2 from "@/assets/Литые.jpg"
import image3 from "@/assets/Катаные.jpg"
import { PAGE } from "@/config/public-page.config";


export const getLinksNav = (t: (key: string) => string) => [
  {
    icon: <IoHomeSharp />,
    title: t("home"),
    path: PAGE.HOME,
  },
  {
    icon: <IoIosBookmarks />,
    title: t("about"),
    path: PAGE.ABOUT,
  },
  {
    icon: <FaCircle />,
    title: t("products"),
    path: PAGE.PRODUCTS,
  },
  {
    icon: <IoIosAddCircle />,
    title: t("create"),
    path: PAGE.CREATE,
  },
  {
    icon: <PiNewspaperFill />,
    title: t("news"),
    path: PAGE.NEW,
  },
  {
    icon: <FaPhoneAlt />,
    title: t("contact"),
    path: PAGE.CONTACT,
  },
];

export const getLinksProducts = (t: (key: string) => string) => [
  {
    title: t("products_title"),
    desc: t("products_des"),
    path: PAGE.KOVANYE,
    image:image1
  },
  {
    title: t("products_title2"),
    desc: t("products_des2"),
    path:  PAGE.LITYE,
    image:image2
  },
  {
    title: t("products_title3"),
    desc: t("products_des3"),
    path:  PAGE.KATANYE,
    image:image3
  },
];
