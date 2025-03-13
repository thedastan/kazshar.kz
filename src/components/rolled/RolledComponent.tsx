'use client'
import React from "react";
import HeroRolled from "./hero/HeroRolled";
import AboutRolled from "./about/AboutRolled";
import TabRolled from "./tab/TabRolled";
import 'aos/dist/aos.css';  // импортируем стили AOS
import Aos from 'aos'; 
const RolledComponent = () => {

  React.useEffect(() => {
    Aos.init({
      duration: 800,  
      easing: 'ease-in-out', 
    });
  }, []);
	

	return (
		<div>
			<HeroRolled />
			<AboutRolled />
			<TabRolled />
		</div>
	);
};

export default RolledComponent;
