'use client'
import React from "react";
import "aos/dist/aos.css"; // импортируем стили AOS
import Aos from "aos";
import Heroforged from "./hero/Heroforged";
import Aboutforged from "./about/Aboutforged";
import Tabforged from "./tab/Tabforged";
const ForgedComponent = () => {
	React.useEffect(() => {
		Aos.init({
			duration: 800,
			easing: "ease-in-out",
		});
	}, []);

	return (
		<div>
			<Heroforged />
			<Aboutforged />
			<Tabforged />
		</div>
	);
};

export default ForgedComponent;
