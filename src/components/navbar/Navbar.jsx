import { IoCartOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <div className="logo font-bold text-2xl bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-transparent bg-clip-text">DigiTools</div>

        <div className="mid hidden sm:block ">
          <ul className="flex gap-4 items-center">
            <li><a href="#products" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Products</a></li>
            <li><a href="#features" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Features</a></li>
            <li><a href="#pricing" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Pricing</a></li>
            <li><a href="#testimonials" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">Testimonials</a></li>
            <li><a href="#faq" className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4">FAQ</a></li>
          </ul>
        </div>

        <div className="right sm:gap-2 justify-center items-center hidden sm:flex">

          <IoCartOutline className="text-sm sm:text-2xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-103" />
          <span className=" text-sm hover:text-primary cursor-pointer font-semibold sm:text-4 transition-all duration-300 hover:scale-103">Login</span>
          <button className=" btn btn-primary bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% transition-all duration-300 text-white py-2 sm:py-0 text-sm sm:text-md rounded-full ">Get Started</button>
        </div>

        <div className="sm:hidden"><SlOptions /></div>

      </div>
    </div>
  );
};

export default Navbar;
