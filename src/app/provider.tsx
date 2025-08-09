"use client";

import LayoutPage from "@/components/layout/LayputPage";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface LayoutPageProps {
	children: ReactNode;
}

const Providers: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div>
			<Provider store={store}>
				<LayoutPage>{children}</LayoutPage>
			</Provider>
		</div>
	);
};

export default Providers;
