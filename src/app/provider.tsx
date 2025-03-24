"use client";

import Footer from "@/components/navbar/footer/Footer";
import Header from "@/components/navbar/header/Header";
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
        <Header />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default Providers;
