import { useTranslations } from "next-intl";

const HeroCreate = () => {
	const t = useTranslations("Create");

	return (
		<div className="relative w-[100%] h-[500px]">
			<div className="w-full h-[500px] overflow-hidden">
				<div className="relative w-full h-[700px] md:h-[100vh] overflow-hidden md:py-10">
					{" "}
					<iframe
						className="absolute top-0 left-0 w-full h-full    md:scale-[1.2] scale-[1.2]"
						style={{ objectFit: "cover" }}
						src="https://kinescope.io/embed/8cEfSExVYPMjFiJ1YQiGX6"
						allow="autoplay; muted"
					/>
				</div>
			</div>

			<div className="flex md:px-16 px-6 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
				<div className="">
					<h1 className="text-center font-[700] md:text-[60px] text-[30px] text-white">
						{t("title")}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default HeroCreate;
