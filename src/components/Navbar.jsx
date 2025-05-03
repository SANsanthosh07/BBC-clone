import { LuTextSearch } from "react-icons/lu";
import Button from "./Button";

import React, { useState } from "react";
import { Drawer } from "antd";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bbc from "../assets/bbc.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title={
          <div className="flex items-center justify-between w-full">
            <div
              onClick={onClose}
              className="text-4xl w-10 h-10 p-1 flex items-center font-bold text-black hover:bg-gray-200 hover:cursor-pointer"
            >
              <MdOutlineCancelPresentation />
            </div>

            <div className="flex-1 flex justify-center sm:justify-end">
              <Link to="/" className="block sm:hidden">
                <img
                  src={bbc}
                  alt="BBC Logo"
                  className="w-[80px] h-[30px] object-cover rounded cursor-pointer"
                />
              </Link>
            </div>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        rootClassName="drawer-full-sm"
      >
        <div className="list-none">
          <div className="bg-gray-100 w-full sm:w-[315px] h-[60px] p-1.5 flex items-center">
            <input
              type="text"
              className="outline-black bg-white p-2 h-[45px] border-2 w-full sm:w-full lg:w-[250px] lg:h-fit placeholder:text-gray-400 placeholder:font-bold placeholder:text-base"
              onFocus={(e) => (e.target.value = "")}
              placeholder="Search news, topics and more"
            />

            <div className="w-[40px] h-[43px] bg-black flex items-center justify-center rounded-r-sm">
              <IoSearch className="text-white text-xl " />
            </div>
          </div>

          <li
            className={`px-2 py-4 text-xl font-bold text-black cursor-pointer border-l-4 ${
              isHome
                ? "border-black bg-gray-200"
                : "border-transparent hover:bg-gray-200"
            }`}
          >
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>

          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4 cursor-pointer  ">
            <Link to="/news" style={{ color: "black" }}>
              News
            </Link>
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Sport
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Business
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Innovation
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Culture
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Art
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Travel
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Earth
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Audio
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4  cursor-pointer">
            Video
          </li>
          <hr className="hp bg-gray-50" />
          <li className="hover:bg-gray-200 font-bold text-xl px-2 py-4 cursor-pointer">
            Live
          </li>
        </div>
      </Drawer>
      <div className="sticky top-0 z-50">
        <nav className="h-16 bg-white  ">
          <div className="relative w-full max-w-[1350px] h-full mx-auto  flex justify-between items-center">
            <div className="p-4" onClick={showDrawer}>
              <LuTextSearch className="w-[30px] h-[30px] hover:cursor-pointer p-0 hover:bg-gray-200" />
            </div>

            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
            >
              <div className="flex gap-2">
                <span className="bg-black text-white w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center ml-7">
                  B
                </span>
                <span className="bg-black text-white w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center">
                  B
                </span>
                <span className="bg-black text-white w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center">
                  C
                </span>
              </div>
            </Link>

            <div className="mr-5 gap-4 flex right-0">
              <Button
                onClick={() => navigate("/register")}
                className="w-[90px] h-[40px] bg-gray-900 text-white font-medium hidden sm:block hover:cursor-pointer hover:bg-gray-500"
                label="Register"
              />

              <Button
                className="w-[80px] h-[39px] font-medium text-black hover:bg-gray-700 hover:text-white hidden sm:block hover:cursor-pointer"
                label="Sign In"
                linkTo="/signin"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
