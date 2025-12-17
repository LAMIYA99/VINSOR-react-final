import { useCart } from "../../Provider/CartContext";

const CollectionCards = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigating to product detail if parent has onClick
    addToCart({
      id: "vinocraft-1", // Using a static ID for now since this is a UI component without props yet
      name: "Vinocraft",
      price: 12.0,
      image:
        "https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19e297495bea0e798543_flower-bg-image.svg",
    });
  };

  return (
    <div className="group cursor-pointer mb-12">
      <div className="bg-white h-[440px] flex items-center justify-center relative">
        <img
          src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19e297495bea0e798543_flower-bg-image.svg"
          alt=""
          className="w-[263px] h-[242px] object-cover opacity-50 group-hover:opacity-100 duration-500 cursor-pointer"
        />
        <img
          src="https://cdn.prod.website-files.com/6863a6f3b684495eb0089da3/688889b29d7361acd31a2272_Vinocraft.webp"
          alt=""
          className="w-[81px] h-[267px] absolute cursor-pointer"
        />
        <button className="absolute top-5 left-0 bg-[#704f1b] px-2.5 py-0.5 text-[18px] font-medium leading-normal font-cormorant uppercase text-white">
          10% off
        </button>
        <ul className="absolute top-5 right-5 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 duration-300">
          <li
            onClick={handleAddToCart}
            className="w-[30px] h-[30px] border border-[#c3a473] rounded-full flex items-center justify-center hover:bg-[#c3a473] hover:text-white transition-colors cursor-pointer"
          >
            <img
              src="	https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19e297495bea0e798540_shop.svg"
              alt="Add to cart"
              className="w-3 h-3.5 object-contain filter hover:brightness-0 hover:invert"
            />
          </li>
          <li className="w-[30px] h-[30px] border border-[#c3a473] rounded-full flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e19e297495bea0e798542_see.svg"
              alt=""
              className="w-2.5 h-3.5 object-contain"
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center  flex-col gap-[5px] mt-[30px]">
        <h2 className="text-[#704f1b] uppercase text-[20px] font-medium  leading-normal tracking-[0] font-cormorant">
          Vinocraft
        </h2>
        <h3 className="text-[#1f2324] font-medium leading-normal text-[20px] font-cormorant uppercase">
          $ 12.00 USD
        </h3>
      </div>
    </div>
  );
};

export default CollectionCards;
