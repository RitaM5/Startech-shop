import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarContext } from "../../context/SidebarProvider";
import { CartContext } from "../../context/CartProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  return (
    <div className=" z-50 w-full bg-base-100 font-poppins">
      <div className="my-4 h-full lg:hidden font-caveat inline-flex items-center gap-3">
        <img src="./img/cbi_xiaomi-logo.png" alt="" srcset="" /><h1 className="text-4xl text-violet-800 font-semibold">Startech</h1>
      </div>
      <nav className="bg-base-100">
        <div className="flex font-poppins items-center font-medium justify-around h-20 ">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <div className="hidden lg:inline-flex items-center gap-3">
              <img className="hidden lg:block" src="./img/cbi_xiaomi-logo.png" alt="" srcset="" />
              <h1 className="global-nav__logo relative font-caveat text-violet-800 text-4xl font-semibold hidden lg:block">Startch</h1>
            </div>

            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <p className="block relative md:hidden lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className="bgColor text-white px-2 rounded-full absolute bottom-8 left-4">{itemAmount}</span>
              <i class="fas fa-shopping-cart text-black text-2xl"></i>
            </p>
          </div>
          <ul className="md:flex hidden text-violet-800 relative right-6 items-center gap-8 lg:gap-2 font-semibold ">
            <li className="">
              <Link to="/" className="py-2 px-3 inline-block hover:underline underline-offset-8">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:underline underline-offset-8">
                Latest Laptops
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:underline underline-offset-8">
                Top Laptops
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:underline underline-offset-8">
                news
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block">
                <i class="fas fa-heart text-black text-2xl"></i>
              </Link>
            </li>
            <li className=" relative" onClick={() => setIsOpen(!isOpen)}>
              <Link to="/" className="py-2 px-3 inline-block">
                <span className="bg-violet-800 text-white px-2 rounded-full absolute bottom-8 left-8">{itemAmount}</span>
                <i class="fas fa-shopping-cart text-black text-2xl"></i>
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block ">
                <button className="bg-violet-800 text-white py-1 px-4 rounded-md">Log Out</button>
              </Link>
            </li>
          </ul>

          {/*responsive Mobile nav */}
          <ul
            className={`
        md:hidden max-md:block bgColor text-white fixed w-full h-[450px] text-left z-10 py-6 top-40 overflow-y-auto bottom-0  pl-10
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}
          >
            <li>
              <Link to="/" className="py-4 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/GLatest Phones" className="py-3 px-3 inline-block">
                Latest Laptops
              </Link>
            </li>
            <li>
              <Link to="/Top Phones" className="py-3 px-3 inline-block">
                Top Laptops
              </Link>
            </li>

            <div className="py-3">
              <li>
                <Link to="/ news" className="py-3 px-3 inline-block">
                  news
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  <i class="fas fa-heart text-black text-2xl"></i>
                </Link>
              </li>
              <li className=" relative">
                <Link to="/" className="py-3 px-3 inline-block">
                  <span className="bg-violet-800 text-white px-2 rounded-full absolute bottom-8 left-8">{itemAmount}</span>
                  <i class="fas fa-shopping-cart text-black text-2xl"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  <button className="bg-violet-800 text-white py-1 px-4 rounded-md">Log Out</button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Sidebar></Sidebar>
    </div>

  );
};

export default Navbar;