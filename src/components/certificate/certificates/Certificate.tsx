import Image from "next/image";
import certificate from "@/assets/Certificate.webp";
import certificate1 from "@/assets/Сертификаты1.png"
import certificate2 from "@/assets/Сертификаты2.png"


const Certificate = () => {
	return (
		<div className="w-full  bg-[#dee4e9] py-16">
			<div className="container">
				 

				<div className="md:flex block gap-4 mt-8">
				<div className=" relative md:w-[350px] w-full md:h-[500px] h-[600px] overflow-hidden md:mt-0 mt-4 rounded-[4px]">
						<Image fill objectFit="contain" src={certificate1} alt="img" />
					</div>
					<div className=" relative md:w-[350px] w-full md:h-[500px] h-[600px] overflow-hidden md:mt-0 mt-4 rounded-[4px]">
						<Image fill objectFit="contain" src={certificate2} alt="img" />
					</div>
				</div>

			</div>
		</div>
	);
};

export default Certificate;
