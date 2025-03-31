import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import { FiDownload } from "react-icons/fi";

const DownloadableImage = ({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = typeof src === "string" ? src : src.src; // Универсальная обработка пути
    link.download = alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] group">
      <Image fill objectFit="cover" src={src} alt={alt} />

      <button
        className="absolute top-4 right-4 bg-black/70 text-white text-[32px] p-2 rounded-full transition-opacity 
          md:opacity-0 md:group-hover:opacity-100 opacity-100
          hover:bg-black"
        onClick={handleDownload}
      >
        <FiDownload />
      </button>
    </div>
  );
};

const About = () => {
  const t = useTranslations("About");

  return (
    <div>
      <div className="container">
        <div className="pb-20 md:pb-0 py-0 md:py-20">
          <div data-aos="fade-up" className="flex md:flex-row flex-col">
            <div className="w-full flex justify-center items-center h-[500px]">
              <div className="md:p-14 p-0">
                <h1 className="md:text-[30px] text-[20px] font-[700]">
                  {t("histori")}
                </h1>
                <div className="flex items-center mt-4 gap-4">
                  <div className="w-4 md:h-[220px] md:flex hidden h-[320px] bg-[#ff2828]" />
                  <p className="text-[18px] text-[#575757] font-[400]">
                    {t("histori_description")}
                  </p>
                </div>
              </div>
            </div>
            <DownloadableImage src={img1} alt="history-image" />
          </div>
          <div data-aos="fade-up" className="flex md:flex-row flex-col-reverse">
            <DownloadableImage src={img2} alt="task-image" />
            <div className="w-full flex justify-center items-center h-[500px]">
              <div className="md:p-14 p-0">
                <h1 className="md:text-[30px] text-[20px] font-[700]">
                  {t("task")}
                </h1>
                <div className="flex items-center mt-4 gap-4">
                  <div className="w-4 md:flex hidden md:h-[220px] h-[220px] bg-[#ff2828]" />
                  <p className="text-[18px] text-[#575757] font-[400]">
                    {t("task_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1d1d1d] py-20">
        <div className="container">
          <div className="md:flex block gap-6 items-center">
            <DownloadableImage src={img1} alt="today-image" />
            <div className="w-full flex flex-col gap-4">
              <h1 className="md:text-[40px] mt-4 md:mt-0 text-[26px] font-[700] text-white">
                {t("today")}
              </h1>
              <h4 className="text-[18px] font-[500] text-white">
                {t("today_description")}
              </h4>
              <p className="text-[18px] font-[500] text-white">
                {t("today_description2")}
              </p>
              <p className="text-[18px] font-[500] text-white flex gap-[5px]">
                <span className="text-[18px] font-[600]">
                  {t("today_span")}
                </span>
                {t("today_tonn")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
