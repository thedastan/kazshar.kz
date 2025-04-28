"use client";
import React from "react";
import "aos/dist/aos.css"; // импортируем стили AOS
import Aos from "aos";
import Process from "./process/Process";
import Control from "./control/Control";
import HeroCreate from "./hero/HeroCreate";

const CreateComponent = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <HeroCreate />
      <Process />
      {/* <Equipment /> */}
      <Control />
    </div>
  );
};

export default CreateComponent;
