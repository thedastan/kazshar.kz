import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import {
	SEO_DESCRIPTION_EN,
	SEO_DESCRIPTION_KZ,
	SEO_DESCRIPTION_RU,
	SEO_IMAGE,
	SEO_KEY_WORDS_EN,
	SEO_KEY_WORDS_KZ,
	SEO_KEY_WORDS_RU,
	SITE_NAME,
} from "@/constants/seo/seo.constants";
import Providers from "./provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope } from "next/font/google";
import Head from "./Head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const manrope = Manrope({
	variable: "--font-manrope", // Добавляем переменную для использования в CSS
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Выбираем нужные толщины (можно изменить)
});

export const metadata: Metadata = {
	title: SITE_NAME,
	description: SEO_DESCRIPTION_EN || SEO_DESCRIPTION_RU || SEO_DESCRIPTION_KZ,
	keywords: SEO_KEY_WORDS_EN || SEO_KEY_WORDS_RU || SEO_KEY_WORDS_KZ,

	openGraph: {
		url: SEO_IMAGE,
	},
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<Head />
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
