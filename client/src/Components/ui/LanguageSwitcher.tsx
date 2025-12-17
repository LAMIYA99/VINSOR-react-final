import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`text-white text-sm font-bold hover:text-[#bd9556] duration-300 ${
          i18n.language === "en" ? "text-[#bd9556]" : ""
        }`}
      >
        EN
      </button>
      <span className="text-white text-sm">|</span>
      <button
        onClick={() => changeLanguage("az")}
        className={`text-white text-sm font-bold hover:text-[#bd9556] duration-300 ${
          i18n.language === "az" ? "text-[#bd9556]" : ""
        }`}
      >
        AZ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
