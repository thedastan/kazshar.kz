import Image from "next/image";
import certificate from "@/assets/Certificate.webp";

const Certificate = () => {
	return (
		<div className="w-full  bg-[#dee4e9] py-16">
			<div className="container">
				<div className="md:flex block gap-4">
					<div className=" relative w-full md:h-[360px] h-[200px] overflow-hidden rounded-[4px]">
						<Image fill objectFit="cover" src={certificate} alt="img" />
					</div>
					<div className=" relative w-full md:h-[360px] h-[200px] overflow-hidden md:mt-0 mt-4 rounded-[4px]">
						<Image fill objectFit="cover" src={certificate} alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certificate;
