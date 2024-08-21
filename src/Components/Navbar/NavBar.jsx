import React from "react";
import logo from "../Assets/ecommerce.png";
import cart_icon from "../Assets/shopping-cart.png";
import { Link } from "react-router-dom";

const NavBar = ({ numItemCart }) => {
  return (
    <div className="flex justify-around p-[16px] shadow">
      <div className="flex justify-center gap-[10px]">
        <img src={logo} alt="" className="max-h-[50px]" />
        <p className="text-[38px] font-semibold">SHOPMAI</p>
      </div>
      <ul className="flex justify-center list-none gap-[50px] text-[#626262] text-[20px] font-medium">
        <li className="flex flex-col align-middle justify-center gap-[3px] cursor-pointer">
          Shop
          <hr className="w-[80%] h-[3px] bg-[#ff4141]" />
        </li>
        <li className="flex flex-col align-middle justify-center gap-[3px] cursor-pointer">
          Men
          <hr className="w-[80%] h-[3px] bg-[#ff4141]" />
        </li>
        <li className="flex flex-col align-middle justify-center gap-[3px] cursor-pointer">
          Women
          <hr className="w-[80%] h-[3px] bg-[#ff4141]" />
        </li>
        <li className="flex flex-col align-middle justify-center gap-[3px] cursor-pointer">
          Kids
          <hr className="w-[80%] h-[3px] bg-[#ff4141]" />
        </li>
      </ul>
      <div className="flex align-middle gap-[45px]">
        <button className="w-[157px] h-[58px] outline-none border-solid border-[1px] border-[#7a7a7a] rounded-[75px] bg-[white] active:bg-[#f3f3f3] cursor-pointer text-[#515151]">
          Login
        </button>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" className="max-h-[40px]" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center align-middle rounded-[11px] text-[14px] bg-red-700 text-white mt-[-5px] ml-[-55px]">
          {numItemCart}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
