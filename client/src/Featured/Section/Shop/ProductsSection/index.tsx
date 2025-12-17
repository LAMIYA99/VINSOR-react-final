import { ArrowRight } from "lucide-react";
import CollectionCards from "../../../Common/CollectionCards";
import { useTranslation } from "react-i18next";

const ProductSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FCF5EA] py-[120px]">
      <div className="container mx-auto px-31">
        <div className="grid grid-cols-4 gap-[30px]">
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
        </div>
        <ul className="border border-[#c3a473] flex items-center">
          <li className="flex items-center justify-center gap-3.5 py-[30px] w-full px-[15px] border-r border-[#c3a473] text-[#1f2324] text-[18px] font-medium leading-normal font-cormorant uppercase">
            <img
              src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/68620d52aba2c66f72ec417c_icon-1.svg"
              alt=""
              className="w-[35px] h-[26px] object-cover"
            />
            {t("shop.features.delivery")}
          </li>
          <li className="flex items-center justify-center gap-3.5 py-[30px] w-full px-[15px] border-r border-[#c3a473] text-[#1f2324] text-[18px] font-medium leading-normal font-cormorant uppercase">
            <img
              src="		https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1b6e8958c03b6708ff7c_support.svg"
              alt=""
              className="w-[25px] h-[27px] object-cover"
            />
            {t("shop.features.support")}
          </li>
          <li className="flex items-center justify-center gap-3.5 py-[30px] w-full px-[15px] border-r border-[#c3a473] text-[#1f2324] text-[18px] font-medium leading-normal font-cormorant uppercase">
            <img
              src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1b6e8958c03b6708ff7d_thums.svg"
              alt=""
              className="w-6 h-6 object-cover"
            />
            {t("shop.features.quality")}
          </li>
          <li className="flex items-center justify-center gap-3.5 py-[30px] w-full px-[15px] border-r border-[#c3a473] text-[#1f2324] text-[18px] font-medium leading-normal font-cormorant uppercase">
            <img
              src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1b6e8958c03b6708ff7e_date.svg"
              alt=""
              className="w-[22px] h-[26px] object-cover"
            />
            {t("shop.features.availability")}
          </li>
        </ul>
      </div>
      <div className=" mt-[120px] py-[70px] pl-20 pr-[60px] bg-black border-t border-[#d9d9d9]">
        <div className="container mx-auto px-31 flex items-center justify-between">
          {" "}
          <div className="flex items-start flex-col">
            <h2 className="tracking-[.51px] text-[17px] font-normal leading-[1.58824] font-lato text-[#bd9556] uppercase mb-[18px]">
              {t("shop.deal.subtitle")}
            </h2>
            <h3 className="text-white text-[36px] leading-[1.27778] uppercase font-cormorant">
              {t("shop.deal.title")}
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex items-center">
              <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#bd9556] flex items-center flex-col px-[45px] border-r border-[#d9d9d9]">
                03{" "}
                <span className="text-[20px] text-white font-medium uppercase ">
                  {t("home.limited.timer.days")}
                </span>
              </li>
              <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#bd9556] flex items-center  border-r border-[#d9d9d9]">
                <div className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#bd9556] flex items-center flex-col px-[45px]">
                  17
                  <span className="text-[20px] text-white font-medium uppercase ">
                    {t("home.limited.timer.hours")}
                  </span>
                </div>
                <div className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#bd9556] flex items-center flex-col px-[45px]">
                  08
                  <span className="text-[20px] text-white font-medium uppercase ">
                    {t("home.limited.timer.min")}
                  </span>
                </div>
              </li>
              <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#bd9556] flex items-center flex-col px-[45px]">
                22
                <span className="text-[20px] text-white font-medium uppercase ">
                  {t("home.limited.timer.sec")}
                </span>
              </li>
            </ul>
            <button className="bg-white font-arimo text-black capitalize px-[35px] py-3 flex items-center justify-center  gap-1 cursor-pointer">
              {t("shop.deal.button")} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
