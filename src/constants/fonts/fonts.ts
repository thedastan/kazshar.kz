import localFont from "next/font/local";

export const gilroy = localFont({
	variable: "--font-gilroy",
	src: [
		{
			path: "./Gilroy-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./Gilroy-Bold.woff",
			weight: "700",
			style: "normal",
		},
	],
});
