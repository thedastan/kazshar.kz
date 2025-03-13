"use client";
import React from "react";
import "aos/dist/aos.css"; // импортируем стили AOS
import Aos from "aos";
import Hero from './hero/Hero';
import Process from './process/Process';
import Equipment from './equipment/Equipment';
import Control from './control/Control';

const CreateComponent = () => {

  React.useEffect(() => {
		Aos.init({
			duration: 800,
			easing: "ease-in-out",
		});
	}, []);

  return (
    <div>
       <Hero/>
       <Process/>
       <Equipment/>
       <Control/>

    </div>
  );
};

export default CreateComponent;