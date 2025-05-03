import React from "react";
import bbc from "../assets/bbc.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LangDrop from "./LangDrop";

const Footer = () => {
  return (
    <>
      <hr className="bg-gray-700 h-0"></hr>
      <div className="m-5">
        <Link to="/">
          <img
            src={bbc}
            className="w-[105px] h-[40px] object-cover rounded cursor-pointer"
          />
        </Link>

        <div className="flex mt-3">
          <ul className="flex flex-col sm:flex-row items-start sm:items-center text-sm font-semibold gap-2 sm:gap-4">
            <Link to="/">
              <li className="hover:underline cursor-pointer">Home</li>
            </Link>
            <Link to="/news">
              <li className="hover:underline p-2 cursor-pointer">News</li>
            </Link>
            <Link to="/sport">
              <li className="hover:underline p-2 cursor-pointer">Sport</li>
            </Link>

            <li className="hover:underline p-2 cursor-pointer">Business</li>
            <li className="hover:underline p-2 cursor-pointer">Innovation</li>
            <li className="hover:underline p-2 cursor-pointer">Culture</li>
            <li className="hover:underline p-2 cursor-pointer">Art</li>
            <li className="hover:underline p-2 cursor-pointer">Travel</li>
            <li className="hover:underline p-2 cursor-pointer">Earth</li>
            <li className="hover:underline p-2 cursor-pointer">Audio</li>
            <li className="hover:underline p-2 cursor-pointer">Video</li>
            <li className="hover:underline p-2 cursor-pointer">Live</li>
            <li className="hover:underline p-2 cursor-pointer">Weather</li>
            <li className="hover:underline p-2 cursor-pointer">BBC Shop</li>
            <li className="hover:underline p-2 cursor-pointer">BritBox</li>
          </ul>
        </div>

        <LangDrop />
        <div className="flex flex-row">
          <h1 className="font-bold text-lg">Follow BBC on:</h1>
          <div className="flex items-center gap-5 h-10 ml-8">
            <FaXTwitter />
            <FaFacebookF />
            <RiInstagramFill />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        <div className="">
          <ul className="flex  sm:grid-cols-3 gap-3 text-sm text-gray-500 mt-2">
            <li className="hover:underline hover:cursor-pointer">
              Terms of Use
            </li>
            <li className="hover:underline hover:cursor-pointer">
              About the BBC
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:underline hover:cursor-pointer">Cookies</li>
            <li className="hover:underline hover:cursor-pointer">
              Accessibility Help
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Contact the BBC
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Advertise with us
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Do not share or sell my info
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Contact technical support
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Copyright 2025 BBC. All rights reserved. The BBC is not responsible
          for the content of external sites.
          <span className="text-black font-semibold hover:cursor-pointer">
            Read about our approach to external linking.
          </span>
        </p>
      </div>
      <footer className=" h-12  bg-blue-white py-4"></footer>
    </>
  );
};

export default Footer;
