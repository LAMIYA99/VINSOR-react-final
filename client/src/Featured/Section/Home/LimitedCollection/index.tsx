import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const LimitedCollection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="
    bg-[#F7F1E8] pb-[116px]"
    >
      <div className=" container mx-auto px-31">
        <div className="bg-white">
          <div className=" grid grid-cols-2 pt-20 pb-[70px] px-[55px] items-center">
            <div className="flex items-center justify-center">
              <div className="left max-w-[442px] ">
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/6886f607105219c626287aa3_image%20bottle.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="desc">
              <p className="tracking-[.51px] text-[17px] font-normal leading-[1.58824] uppercase font-lato  text-[#562a2f] mb-[18px]">
                {t("home.limited.subtitle")}
              </p>
              <h2 className="text-[#704f1b] text-[42px] font-normal leading-[1.2381] uppercase font-cormorant mb-[18px]">
                {t("home.limited.productName")}
              </h2>
              <span className="text-[42px] font-normal text-[#1f2324] leading-[1.2381] uppercase font-cormorant ">
                {t("home.limited.price")}
              </span>
              <ul className="flex items-center border-b border-[#d9d9d9] mt-[30px]">
                <li className="border-b border-transparent hover:border-[#704f1b] duration-300 cursor-pointer text-[#222] px-[30px] py-[9px] font-lato">
                  {t("home.limited.tabs.winemaking")}
                </li>
                <li className="border-b border-transparent hover:border-[#704f1b] duration-300 cursor-pointer text-[#222] px-[30px] py-[9px] font-lato">
                  {t("home.limited.tabs.vineyard")}
                </li>
              </ul>
              <p className="mt-[30px] text-[#1f2324] text-[16px] font-lato leading-[1.75]">
                {t("home.limited.description")}
              </p>
              <button className="bg-[#631015] font-arimo text-white capitalize px-[35px] py-3 flex items-center justify-center mt-[30px] gap-1 cursor-pointer">
                {t("home.limited.button")} <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2  py-[70px] pl-20 pr-[60px] border-t border-[#d9d9d9]">
            <div className="flex items-start flex-col">
              <h2 className="tracking-[.51px] text-[17px] font-normal leading-[1.58824] font-lato text-[#562a2f] uppercase mb-[18px]">
                {t("home.limited.deal.subtitle")}
              </h2>
              <h3 className="text-[#704f1b] text-[36px] leading-[1.27778] uppercase font-cormorant">
                {t("home.limited.deal.title")}
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <ul className="flex items-center">
                <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#1f2324] flex items-center flex-col px-[45px] border-r border-[#d9d9d9]">
                  03{" "}
                  <span className="text-[20px] font-medium uppercase ">
                    {t("home.limited.timer.days")}
                  </span>
                </li>
                <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#1f2324] flex items-center  border-r border-[#d9d9d9]">
                  <div className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#1f2324] flex items-center flex-col px-[45px]">
                    17
                    <span className="text-[20px] font-medium uppercase ">
                      {t("home.limited.timer.hours")}
                    </span>
                  </div>
                  <div className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#1f2324] flex items-center flex-col px-[45px]">
                    08
                    <span className="text-[20px] font-medium uppercase ">
                      {t("home.limited.timer.min")}
                    </span>
                  </div>
                </li>
                <li className="text-[60px] font-thin leading-[1.03333] font-cormorant text-[#1f2324] flex items-center flex-col px-[45px]">
                  22
                  <span className="text-[20px] font-medium uppercase ">
                    {t("home.limited.timer.sec")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedCollection;
