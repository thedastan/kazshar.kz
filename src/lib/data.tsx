import { PAGE } from "@/config/public-page.config";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const useSocialNetworks = () => [
	{
		icon: <IoLogoWhatsapp size={24} />,
		path: "https://wa.me/77716380820",
	},
	{
		icon: <BsTelegram size={24} />,
		path: "https://t.me/+77716380820",
	},
	{
		icon: <RiInstagramFill size={24} />,
		path: "https://instagram.com/",
	},
];

export const useMenuItems = () => {
	const t = useTranslations("Header");

	const pathname = usePathname();
	const locale = useLocale();

	const mainMenu = [
		{ title: t("home"), key: "home", path: PAGE.HOME },
		{ title: t("about"), key: "about", path: PAGE.ABOUT },
		{ title: t("client"), key: "client", path: PAGE.FORCLIENT },
		{ title: t("news"), key: "news", path: PAGE.NEW },
		{ title: t("contact"), key: "contact", path: PAGE.CONTACT },
	];

	// Исключаем "home", если мы на главной странице
	const isHomePage = pathname === `/${locale}`;
	const filteredMenu = isHomePage
		? mainMenu.filter((item) => item.key !== "home")
		: mainMenu;
	return {
		main: filteredMenu,
		dropdowns: {
			about: [
				{ href: PAGE.ABOUT, label: t("aboutCompany") },
				{ href: PAGE.SERTIFIKAT, label: t("certificates") },
			],
			client: [
				{ href: PAGE.KOVANYE, label: t("kovanye") },
				{ href: PAGE.LITYE, label: t("litye") },
				{ href: PAGE.KATANYE, label: t("katanye") },
			],
			news: [
				{ href: PAGE.NEW, label: t("news") },
				{ href: PAGE.GALERY, label: t("gallery") },
			],
		},
	};
};
