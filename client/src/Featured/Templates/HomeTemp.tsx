import AboutUsSection from "../Section/Home/AboutUsSection";
import BannerSection from "../Section/Home/BannerSection";
import Collections from "../Section/Home/Collections";
import HarvestSection from "../Section/Home/HarvestSection";
import LimitedCollection from "../Section/Home/LimitedCollection";

const HomeTemp = () => {
  return (
    <div>
      <BannerSection />
      <AboutUsSection />
      <LimitedCollection />
      <Collections />
      <HarvestSection />
    </div>
  );
};

export default HomeTemp;
