import { IoPlaySharp } from "react-icons/io5";
import GlobalBbc from "../assets/GlobalBbc.png";
import React from "react";
import { MdBookmarkBorder } from "react-icons/md";

const PodcastCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gradient-to-r from-black to-red-700 text-white w-full sm:h-[400px] p-4 items-center justify-center">
        <div className="flex flex-col ml-45 w-fit  sm:items-start sm:text-left text-center px-4 sm:px-0 sm:w-2/3">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-2xl sm:w-[400px] sm:mr-5 font-serif font-bold hover:cursor-pointer hover:underline text-center sm:text-left">
              {data?.[13]?.title}
            </p>
            <p className="text-sm sm:w-[400px] text-white mt-4 hidden sm:block font-serif text-center sm:text-left">
              {data?.[13]?.description?.slice(0, 100)}
            </p>
          </div>

          <div className="flex  sm:justify-start gap-6 mt-6">
            <button className="flex items-center gap-2 text-white font-medium cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-gray-300">
                <IoPlaySharp className="text-lg sm:text-xl" />
              </div>
              <span className="text-sm sm:text-base">25 mins</span>
            </button>
            <button className="flex items-center gap-2 text-white font-medium cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-black">
                <MdBookmarkBorder className="text-lg sm:text-xl" />
              </div>
              <span className="text-sm sm:text-base">Save</span>
            </button>
          </div>
        </div>

        <div className="mt-6 sm:mt-0 sm:ml-10  sm:w-1/3">
          <img
            src={GlobalBbc}
            alt="Podcast"
            className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] object-cover rounded cursor-pointer"
          />
        </div>
      </div>

      <footer className="h-12 bg-blue-white py-4"></footer>
      <hr className="bg-gray-700 h-1" />
    </>
  );
};

export default PodcastCard;
