import { FaCircle, FaPhoneAlt } from "react-icons/fa";
import { IoIosAddCircle, IoIosBookmarks } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { PiNewspaperFill } from "react-icons/pi";

import image1 from "@/assets/Кованые.jpg"
import image2 from "@/assets/Литые.jpg"
import image3 from "@/assets/Катаные.jpg"


export const getLinksNav = (t: (key: string) => string) => [
  {
    icon: <IoHomeSharp />,
    title: t("home"),
    path: "/",
  },
  {
    icon: <IoIosBookmarks />,
    title: t("about"),
    path: "/about",
  },
  {
    icon: <FaCircle />,
    title: t("products"),
    path: "/products",
  },
  {
    icon: <IoIosAddCircle />,
    title: t("create"),
    path: "/create",
  },
  {
    icon: <PiNewspaperFill />,
    title: t("news"),
    path: "/news",
  },
  {
    icon: <FaPhoneAlt />,
    title: t("contact"),
    path: "/contact",
  },
];

export const getLinksProducts = (t: (key: string) => string) => [
  {
    title: t("products_title"),
    desc: t("products_des"),
    path: "/forged",
    image:image1
  },
  {
    title: t("products_title2"),
    desc: t("products_des2"),
    path: "/cast",
    image:image2
  },
  {
    title: t("products_title3"),
    desc: t("products_des3"),
    path: "/rolled",
    image:image3
  },
];
