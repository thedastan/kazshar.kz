import { useTranslations } from "next-intl";

const HeroNews = () => {
  const t = useTranslations("News");

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
          }}
        >
          <source src="/metal.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex md:px-16 px-6 bg-[#000000b0] gap-20 absolute top-0 left-0 w-[100%] h-[500px] justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center h-[500px] md:h-[600px]">
          <h1 className="font-[700] md:w-[1100px] w-full md:text-[60px] text-center text-[30px] text-white">
            {t("title")}
          </h1>
          <p className="font-[500] text-[18px] text-center mt-4 text-white">
            {t("des")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
