import { useState } from "react";
import Logo from "../assets/svg/Logo.svg";
import menuIcon from "../assets/svg/menuIcon.svg";
import Button from "../component/Button/Button";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed top-0 w-full z-20">
      <div className="flex  justify-center bg-[#080719] w-full h-28 text-white font-normal text-sm transition-all duration-200">
        <div className="flex md:justify-around md:w-[90%] w-full items-center py-5 justify-between">
          <div className="md:w-[142px] md:h-[72px] w-[122px] h-[52px] transition-all duration-800">
            <img
              src={Logo}
              alt="Logo"
              // width={142}
              // height={72}
              className="w-full h-full"
            />
          </div>
          <div className="md:flex hidden ">
            <ul className="flex gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text gap-4  justify-end md:flex hidden ">
            <Button buttonName={"Sign in"} style={""} border={false} />
            <Button buttonName={"Get Started"} style={""} border={true} />
            {/* <button>Get Started</button> */}
          </div>
          <div
            className="md:hidden flex pr-5"
            onClick={() => setOpenMenu((pre) => !pre)}
          >
            <img
              src={menuIcon}
              alt="menuIcon"
              width={32}
              height={32}
              className={`text-white  transition-transform duration-300 ${
                openMenu ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
      {/* {openMenu && ( */}
      <div
        className={`${
          openMenu ? `h-[329px] flex` : `h-0 hidden`
        } transition-all duration-700 bg-[#080719] w-full text-white border-y border-[#505362]`}
      >
        <ul className="flex flex-col w-full h-full p-6 justify-between">
          <li className="w-full">Home</li>
          <li>About</li>
          <li>Sevices</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};

export default Header;
