"use client";
import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import HeroNews from "./hero/HeroNews";
import News from "./news/News";
const NewsComponent = () => {
  React.useEffect(() => {
		Aos.init({
			duration: 800,
			easing: "ease-in-out",
		});
	}, []);
  return (
    <div>
       <HeroNews/>
       <News/>
    </div>
  );
};

export default NewsComponent;