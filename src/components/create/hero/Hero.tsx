
const Hero = () => {
	return (
		<div className="relative w-[100%] h-[500px]">
			<div className="w-full h-[500px]">
				<video
					autoPlay
					loop
					muted
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}>
					<source src="/metal.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="flex px-16 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
				<div className="">
					<h1 className="font-[700] md:text-[60px] text-[30px] text-white">
						Производство
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
