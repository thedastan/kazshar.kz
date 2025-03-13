import img from "@/assets/about.jpg";

const HeroNews = () => {
	return (
		<div
			id="about"
			className="relative bg-fixed bg-center bg-cover"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img.src})`,
			}}>
			<div className="container relative z-10">
				<div className="flex flex-col justify-center items-center h-[600px]">
					 <div className="flex flex-col justify-center items-center w-[700px]">
           <h1 className="font-[700] text-[40px] text-center text-white">Последние события в металлургической отрасли</h1>
           <p className="font-[500] text-[18px] text-center mt-4 text-white">Свежие новости о производстве, ценах и инновациях в сфере металлопродукции.</p>
           </div>
				</div>
			</div>
		</div>
	);
};

export default HeroNews;
