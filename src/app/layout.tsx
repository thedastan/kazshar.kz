import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import Header from "@/components/navbar/header/Header";
import Footer from "@/components/navbar/footer/Footer";
import { SEO_DESCRIPTION, SEO_IMAGE, SITE_NAME } from "@/constants/seo/seo.constants";

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

export const metadata: Metadata = {
	title:  SITE_NAME,
	description: SEO_DESCRIPTION,
	openGraph: {
		url: SEO_IMAGE,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
