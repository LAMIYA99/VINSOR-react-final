import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const HarvestSection = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <img
            src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d69_wine-deal-image.webp"
            alt=""
            className="w-full h-[750px] object-cover"
          />
        </div>
        <div className="col-span-5 bg-[#26310d] relative">
          <img
            src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d6f_grapes.svg"
            className="w-[272px] h-[280px] object-cover absolute top-0 right-0"
            alt=""
          />
          <div className="pl-[101px] w-full h-full flex items-center justify-start">
            <div className="py-5 pl-10 pr-[60px]">
              <h2 className="text-[17px] leading-[1.58824] font-normal uppercase tracking-normal text-white mb-[18px] font-lato">
                Wine deals today
              </h2>
              <h3 className="text-[36px] font-normal uppercase leading-[1.27778] text-white font-cormorant">
                Celebrate harvest <br /> with 50% wine deals
              </h3>
              <ul className="py-[30px] flex items-start text-white font-lato gap-[13px]  flex-col">
                <li className="flex items-center gap-3.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>{" "}
                  Curabitur vulputate nibh ut enim tincidunt.
                </li>
                <li className="flex items-center gap-3.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>{" "}
                  Curabitur vulputate nibh ut enim tincidunt.
                </li>
                <li className="flex items-center gap-3.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>{" "}
                  Curabitur vulputate nibh ut enim tincidunt.
                </li>
                <li className="flex items-center gap-3.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>{" "}
                  Curabitur vulputate nibh ut enim tincidunt.
                </li>
              </ul>
              <button className="bg-white font-arimo text-black capitalize px-[35px] py-3 flex items-center justify-center  gap-1 cursor-pointer">
                Explore products
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#FCF5EA] border-b border-[#ebd9bb]">
        <Marquee>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3.5">
              <img
                src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d71_icon-2.svg"
                alt=""
                className="w-[90px] h-[90px] object-contain"
              />
              <h2 className="text-[#7e6338] leading-[.527273] font-medium font-cormorant text-[110px] uppercase">
                roycello
              </h2>
            </div>
            <div className="flex items-center gap-3.5">
              <img
                src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d71_icon-2.svg"
                alt=""
                className="w-[90px] h-[90px] object-contain"
              />
              <h2 className="text-[#7e6338] leading-[.527273] font-medium font-cormorant text-[110px] uppercase">
                torcicoda
              </h2>
            </div>
            <div className="flex items-center gap-3.5">
              <img
                src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d71_icon-2.svg"
                alt=""
                className="w-[90px] h-[90px] object-contain"
              />
              <h2 className="text-[#7e6338] leading-[.527273] font-medium font-cormorant text-[110px] uppercase">
                roycello
              </h2>
            </div>
            <div className="flex items-center gap-3.5">
              <img
                src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1a3cd4e80af21c9f5d71_icon-2.svg"
                alt=""
                className="w-[90px] h-[90px] object-contain"
              />
              <h2 className="text-[#7e6338] leading-[.527273] font-medium font-cormorant text-[110px] uppercase">
                torcicoda
              </h2>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default HarvestSection;
