"use client";
import React from "react";
import "aos/dist/aos.css"; // импортируем стили AOS
import Aos from "aos";
import HeroAbout from "./hero/HeroAbout";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
const AboutComponent = () => {
	React.useEffect(() => {
		Aos.init({
			duration: 800,
			easing: "ease-in-out",
		});
	}, []);
	return (
		<div>
			<HeroAbout />
			<About />
			<Gallery />
			{/* <Certificate /> */}
		</div>
	);
};

export default AboutComponent;
