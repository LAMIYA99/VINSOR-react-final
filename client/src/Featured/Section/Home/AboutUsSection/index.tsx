import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="relative  bg-[#F7F1E8] p-40 mt-40 overflow-hidden">
      {/* LEFT DECORATION IMAGE */}
      <img
        src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19ced840f55151a82631_flower-image-2.svg"
        alt=""
        className="absolute left-0 bottom-10 w-[230px] opacity-90 pointer-events-none select-none"
      />

      {/* RIGHT DECORATION IMAGE */}
      <img
        src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19ced840f55151a82630_flower-image-1.svg"
        alt=""
        className="absolute right-0 top-10 w-[230px] opacity-90 pointer-events-none select-none"
      />

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-31 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          {/* TOP IMAGE (EMPTY FOR NOW) */}
          <div className="w-full h-[380px]  rounded">
            <img
              src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19ced840f55151a82626_about-image-1.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[#4A4A4A] mt-6 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
            turpis et quam auctor bibendum etivitale arcu. Etiam mollis leoiat
            lorem placerat aliquet nisi aliquam praesent mauris.
          </p>

          <button className="mt-6 bg-[#631015] text-white px-7 py-3 flex items-center gap-2 w-fit">
            Discover More <ArrowRight size={20} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-[#73614C] tracking-[2px] text-[14px] uppercase mb-3">
            About Us
          </p>

          <h2 className="text-[#5B4632] font-serif text-[42px] leading-tight mb-8">
            WHERE OUR WINERY
            <br />
            STORY BEGINS
          </h2>

          {/* BIG RIGHT IMAGE (EMPTY FOR NOW) */}
          <div className="w-full h-[380px]  rounded">
            <img
              src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19ced840f55151a8262c_about-image-2.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 container mx-auto px-31 pt-[230px] ">
        <div className="flex items-center gap-5 border-r border-[#E9BD77]">
          <h2 className="text-[#704f1b] text-[80px] font-thin leading-[.775] font-cormorant">
            25+
          </h2>
          <p className="text-[#1f2324] text-[20px] uppercase font-medium leading-normal font-cormorant">
            Years of winemaking excellence
          </p>
        </div>
        <div className="flex items-center gap-5 border-r border-[#E9BD77] pl-6">
          <h2 className="text-[#704f1b] text-[80px] font-thin leading-[.775] font-cormorant">
            100%
          </h2>
          <p className="text-[#1f2324] text-[20px] uppercase font-medium leading-normal font-cormorant">
            Handpicked grapes for every bottle
          </p>
        </div>
        <div className="flex items-center gap-5  pl-6">
          <h2 className="text-[#704f1b] text-[80px] font-thin leading-[.775] font-cormorant">
            50M
          </h2>
          <p className="text-[#1f2324] text-[20px] uppercase font-medium leading-normal font-cormorant">
            Bottles produced annually
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
