import {  ArrowRight } from "lucide-react";

const BannerSection = () => {
  return (
    <section
      className="relative w-full h-[825px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/683942fbda6583a1fd804795/68871e28bff1d28bc631a626_hero%20img%201.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <p className="text-white text-[17px] font-normal tracking-[.51px] font-lato uppercase">
          FROM VINE TO GLASS
        </p>

        <h1 className="text-white text-[52px] uppercase font-light font-cormorant leading-[1.19231] mt-4">
          HANDPICKED GRAPES,
          <br />
          EXCEPTIONAL WINE QUALITY
        </h1>

        <button className="mt-8 bg-[#631015] text-white text-[16px] py-3.5 px-10 flex items-center gap-2">
          Explore Products <ArrowRight size={22} />
        </button>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <div className="relative w-[150px] h-[150px] flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e187da6fbb7a69baf476f_text-section.svg"
            alt="circle text"
            className="absolute w-full h-full animate-spin-slow"
          />

          <div className="absolute text-white">
            <img
              src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e187da6fbb7a69baf4775_down-arrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-110px] w-full h-[14%] bg-black z-10"></div>
      <div className=" text-white mt-26 bg-black">
        <h2 className="text-center font-cormorant text-[#C1A373] text-[18px] uppercase font-medium leading-normal">
          Trusted wine partner
        </h2>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex gap-10">
            <ul className="flex gap-10 p-10">
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a61_logo%201.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a62_logo%202.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a62_logo%202.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a62_logo%202.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a63_logo%203.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a64_logo%204.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a64_logo%204.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a65_logo%205.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19be2e8f143ea99c7a66_logo%206.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
