import Image from "next/image";
import certificate from "@/assets/Certificate.webp";

const Certificate = () => {
	return (
    <div className=" bg-[#1d1d1d] py-10">
			<div className="container">

      <h1 className="text-[40px] pb-10 font-[700] text-white text-center">Сертификаты и лицензии</h1>
				<div className="flex gap-4">
					<div className=" relative w-full h-[360px] overflow-hidden rounded-[4px]">
						<Image fill objectFit="cover" src={certificate} alt="img" />
					</div>
          <div className=" relative w-full h-[360px] overflow-hidden rounded-[4px]">
						<Image fill objectFit="cover" src={certificate} alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certificate;
