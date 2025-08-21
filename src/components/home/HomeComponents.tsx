"use client";
import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Products from "./products/Products";
import WhyUs from "./why-us/WhyUs";
import Contact from "./contact/Contact";
import useAos from "@/hooks/useAos";

const HomeComponents = () => {
  useAos();
  return (
    <section>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Contact />
    </section>
  );
};

export default HomeComponents;
