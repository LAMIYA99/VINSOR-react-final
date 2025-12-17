import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { navbar } from "../../Constants/navbar";
import { ArrowRight, ChevronDown, CircleUserRound } from "lucide-react";
import SaveToken from "../../Featured/Components/SaveToken";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCart } from "../../Provider/CartContext";

const Header = () => {
  const router = useRouterState();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const isShopPage = router.location.pathname.startsWith("/shop");
  return (
    <div className="flex items-center justify-center py-5  bg-black ">
      {isShopPage ? (
        <div className="grid grid-cols-3 mx-auto max-w-[1750px] px-[15px]  justify-between w-full items-center">
          <div className="flex items-start  ">
            <img
              src="
          https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1870a3cd368917c4829e_logo.svg"
              alt=""
            />
          </div>
          <div className=" w-full flex  ">
            <ul className="flex items-center  justify-center gap-1 ">
              {navbar &&
                navbar?.map((item) => (
                  <li
                    key={item?.id}
                    className="text-white hover:text-[#bd9556] duration-300 cursor-pointer text-[15px] px-5 font-lato uppercase leading-[2.08333px] flex gap-1 justify-center items-center"
                  >
                    <Link to={item?.path}>{item?.name}</Link>{" "}
                    {item?.icon && <ChevronDown size={22} strokeWidth={1} />}
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-8">
            <div className="flex justify-center items-center gap-2">
              <div>
                <SignedOut>
                  <SignInButton mode="modal">
                    <div className="cursor-pointer border-[3px] rounded-full ">
                      <CircleUserRound
                        size={29}
                        color="white"
                        strokeWidth={1.2}
                      />
                    </div>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <SaveToken />
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "avatar-box",
                        userButtonAvatarImage: "avatar-image",
                      },
                    }}
                  />
                </SignedIn>
              </div>
              <div className="relative w-fit">
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/68667dd68e6a5a90416397dc_car-ticon.svg"
                  alt=""
                  className=""
                />

                <span className="absolute -top-1 -right-2 bg-[#631015] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 mx-auto max-w-[1750px] px-[15px]  justify-between w-full items-center">
          <div className=" w-full flex  ">
            <ul className="flex items-center  justify-center gap-1 ">
              {navbar &&
                navbar?.map((item) => (
                  <li
                    key={item?.id}
                    className="text-white text-[15px] hover:text-[#bd9556] duration-300 cursor-pointer px-5 font-lato uppercase leading-[2.08333px] flex gap-1 justify-center items-center"
                  >
                    <Link to={item?.path}>{item?.name}</Link>{" "}
                    {item?.icon && <ChevronDown size={22} strokeWidth={1} />}
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex items-center justify-center ">
            <img
              src="
          https://cdn.prod.website-files.com/683942fbda6583a1fd804795/685e1870a3cd368917c4829e_logo.svg"
              alt=""
            />
          </div>

          <div className="flex items-center justify-end gap-8">
            <div className="flex justify-center items-center gap-2">
              <div>
                <SignedOut>
                  <SignInButton mode="modal">
                    <div className="cursor-pointer border-[3px] rounded-full ">
                      <CircleUserRound
                        size={29}
                        color="white"
                        strokeWidth={1.2}
                      />
                    </div>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <SaveToken />
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "avatar-box",
                        userButtonAvatarImage: "avatar-image",
                      },
                    }}
                  />
                </SignedIn>
              </div>
              <div className="relative w-fit">
                <img
                  src="https://cdn.prod.website-files.com/683942fbda6583a1fd804795/68667dd68e6a5a90416397dc_car-ticon.svg"
                  alt=""
                  className=""
                />

                <span className="absolute -top-1 -right-2 bg-[#631015] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#631015] text-[16px]  flex gap-1.5  text-white py-3.5 px-[35px]">
                Book Tour <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
