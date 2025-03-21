"use client";

import Footer from "@/components/navbar/footer/Footer";
import Header from "@/components/navbar/header/Header";
import ReduxProvider from "@/providers/ReduxProvidex";
import { FC, ReactNode } from "react";

interface LayoutPageProps {
	children: ReactNode;
}

const Providers: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div>
			<ReduxProvider>
				<Header />
				{children}
				<Footer />
			</ReduxProvider>
		</div>
	);
};

export default Providers;
