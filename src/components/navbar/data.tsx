import { FaCircle, FaPhoneAlt } from "react-icons/fa"
import { IoIosAddCircle, IoIosBookmarks } from "react-icons/io"
import { IoHomeSharp } from "react-icons/io5"
import { PiNewspaperFill } from "react-icons/pi"

export const links_nav = [
  {
    icon:<IoHomeSharp />,
    title:"Главная",
    path:"/",
  },
  {
    icon:<IoIosBookmarks />,
    title:"О компании",
    path:"z/about",
  },
  {
    icon:<FaCircle />,
    title:"Продукция",
    path:"/products",
  },
  {
    icon:<IoIosAddCircle />,
    title:"Производство",
    path:"/create",
  },
  {
    icon:<PiNewspaperFill />,
    title:"Новости",
    path:"/news",
  },
  {
    icon:<FaPhoneAlt />,
    title:"Контакты",
    path:"/contact",
  },
]

export const links_products = [
  {
    title:"Кованые мелющие шары",
    desc:"Кованые шары изготавливаются из стальных слитков с помощью кузнечного молота. ",
    path:"/forged",
  },
  {
    title:"Литые мелющие шары",
    desc:"Литые мелющие шары изготавливаются из высокохромистого, среднехромистого и низкохромистого чугуна.",
    path:"/cast",
  },
  {
    title:"Катаные мелющие шары",
    desc:"Катаные мелющие шары изготавливаются из стальных прутков шаропрокатного стана.",
    path:"/rolled",
  }
  
  
]
 