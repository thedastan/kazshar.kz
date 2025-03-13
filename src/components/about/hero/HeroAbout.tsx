import img from "@/assets/about.jpg";

const HeroAbout = () => {
	return (
		<div
			id="about"
			className="relative bg-fixed bg-center bg-cover"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img.src})`,
			}}>
			<div className="container relative z-10">
				<div className="flex justify-center items-center h-[600px]">
					<h1 className="font-[700] text-[60px] text-white">О компании</h1>
				</div>
			</div>
		</div>
	);
};

export default HeroAbout;
