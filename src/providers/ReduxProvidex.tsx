import { store } from "@/redux/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface ReduxProvidexProps {
	children: ReactNode;
}

const ReduxProvidex: FC<ReduxProvidexProps> = ({ children }) => {
	return (
		<div>
			<Provider store={store}>{children}</Provider>
		</div>
	);
};

export default ReduxProvidex;
