'use client'
import React from 'react';
import HeroCats from './hero/HeroCast';
import AboutCast from './about/AboutCast';
import TabCast from './tab/TabCast';
import "aos/dist/aos.css"; // импортируем стили AOS
import Aos from "aos";
const CastComponent = () => {
  React.useEffect(() => {
		Aos.init({
			duration: 800,
			easing: "ease-in-out",
		});
	}, []);

  return (
    <div>
      <HeroCats/>
       <AboutCast/>
       <TabCast/>
    </div>
  );
};

export default CastComponent;