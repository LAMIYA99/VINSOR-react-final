import { useTranslation } from "react-i18next";

const ShopBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/686246355407a58d2cd33fae_banner-img.webp"
        className="w-full h-full object-cover"
      />

      <div
        className="
      absolute inset-0
      bg-[linear-gradient(#00000070,#00000070)]
      flex flex-col justify-center items-center
      pt-[300px] pb-[200px]
    "
      >
        <h2 className="text-[17px] font-normal tracking-[.51px] leading-[1.58824] font-lato text-white uppercase mb-[18px] ">
          {t("shop.banner.subtitle")}
        </h2>
        <h3 className="text-[52px] font-thin font-cormorant leading-[1.19231] text-white uppercase tracking-[0]">
          {t("shop.banner.title")}
        </h3>
      </div>
    </div>
  );
};

export default ShopBanner;
