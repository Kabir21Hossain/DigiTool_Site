import { IoCartOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
const Navbar = ({ cartCount, setTab }) => {
  const [clicked, setClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const handleFlow = () => {
    setClicked(!clicked);
  }

  const handleRightFlow = () => {
    setRightClicked(!rightClicked);

  }
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <div className="logo font-bold text-2xl bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-transparent bg-clip-text" onClick={handleFlow} >DigiTools</div>

        <div className="mid hidden sm:block ">
          <ul className="flex gap-4 items-center">
            <li><a href="#products" onClick={() => setTab('products')} className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Products</a></li>
            <li><a href="#features" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Features</a></li>
            <li><a href="#pricing" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Pricing</a></li>
            <li><a href="#testimonials" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Testimonials</a></li>
            <li><a href="#footer" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">FAQ</a></li>
          </ul>
        </div>

        {
          clicked ? (<div className="mid sm:hidden w-[120px] bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% shadow-md py-3 px-2 rounded-md  text-white absolute top-15 z-50 left-1 transition-all duration-700">
            <span className="flex justify-end items-end hover:text-red-500 mb-2" onClick={handleFlow}><MdCancel size={20} /></span>
            <ul className="flex flex-col gap-4 items-center">
              <li><a href="#products" onClick={() => setTab('products')} className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Products</a></li>
              <li><a href="#features" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Features</a></li>
              <li><a href="#pricing" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Pricing</a></li>
              <li><a href="#testimonials" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Testimonials</a></li>
              <li><a href="#footer" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">FAQ</a></li>
            </ul>
          </div>) : ('')
        }

        <div className="right sm:gap-2 justify-center items-center hidden sm:flex">

          <div className="relative" onClick={() => { setTab('cart'); window.location.href = "#products"; }}>
            <IoCartOutline className="text-sm sm:text-2xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-103" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4 transition-all duration-300 hover:scale-103">Login</span>
          <button className=" btn btn-primary bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% transition-all duration-300 text-white py-2 sm:py-0 text-sm sm:text-md rounded-full ">Get Started</button>
        </div>

        <div className="sm:hidden" onClick={handleRightFlow}><SlOptions /></div>
        {
          rightClicked ? (<div className=" flex flex-col items-center justify-center w-[120px] absolute top-12 right-0 shadow-md  bg-gray-200 rounded-md  sm:hidden ">

            <div className="border-b-1 border-b-gray-400 w-full text-center flex justify-center items-center" onClick={() => { setTab('cart'); window.location.href = "#products"; }}>
              <IoCartOutline size={10} className=" w-full btn btn-primary btn-soft text-sm  cursor-pointer hover:text-primary transition-all duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4 transition-all duration-300 hover:scale-103 btn w-full btn-soft btn-primary border-b-1 border-b-gray-400">Login</span>
            <button className=" btn btn-primary btn-soft text-sm w-full">Get Started</button>
          </div>) : ('')
        }

      </div>
    </div>
  );
};

export default Navbar;
