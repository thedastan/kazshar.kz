import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Language = () => {
  const pathname = usePathname();
  const { push: navigate } = useRouter();
  const params = useParams();
  const { locale } = useParams();

  const LanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPathname = pathname.replace(`/${params.locale}`, `/${newLocale}`);
    navigate(newPathname);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const isHomePage = pathname === `/${locale}` || pathname === "/";
  const isProductsPage = pathname.startsWith(`/${locale}/products`);
  const isContactPage = pathname.startsWith(`/${locale}/contact`);

  if (isHomePage || isProductsPage || isContactPage) {
    return (
      <div>
        <select
          style={{
            transition: "0.1s",
          }}
          className="bg-[#6b6b6b] rounded-[0px]  outline-none w-[50px] h-[20px] ml-[5px] text-[14px] hover:bg-white"
          value={params.locale}
          onChange={LanguageChange}
        >
          <option value="ru">RU</option>
          <option value="kk">KZ</option>
          <option value="en">EN</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <select
        style={{
          transition: "0.1s",
        }}
        className="bg-[#fff]  outline-none w-[50px] h-[30px] md:h-[35px] ml-[5px] text-[14px] hover:bg-white  border-[1px] md:border-[2px] rounded-[10px] border-[#000]"
        value={params.locale}
        onChange={LanguageChange}
      >
        <option value="ru">RU</option>
        <option value="kk">KZ</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default Language;
