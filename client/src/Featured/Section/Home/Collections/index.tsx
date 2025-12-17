import { ArrowRight } from "lucide-react";
import CollectionCards from "../../../Common/CollectionCards";
import { useTranslation } from "react-i18next";

const Collections = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F7F1E8] pb-[120px]">
      <div className="container mx-auto px-31">
        <div className="head flex items-center justify-center flex-col pb-[67px]">
          <p className="text-[#562a2f] tracking-[.51px] text-[17px] font-normal leading-[1.58824] mb-[18px] font-lato uppercase">
            {t("home.collections.subtitle")}
          </p>
          <h2 className="text-[42px] text-[#704f1b] font-normal leading-[1.2381] uppercase font-cormorant text-center">
            {t("home.collections.title")}
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
          <CollectionCards />
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <button className="bg-[#631015] font-arimo text-white capitalize px-[35px] py-3 flex items-center justify-center mt-[30px] gap-1 cursor-pointer">
            {t("home.collections.button")} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
