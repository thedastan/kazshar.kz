"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
	const t = useTranslations("NotFound");

	return (
		<html>
			<body className="bg-gray-100 text-gray-800">
				<div className="w-full h-[100vh] flex flex-col justify-center items-center text-center px-4">
					<div className="max-w-md">
						<h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
						<p className="text-xl mb-6">{t("title")}</p>
						<Link
							href="/"
							className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
							 {t("btn")}
						</Link>
					</div>
				</div>
			</body>
		</html>
	);
}
