import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const LangDrop = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => setOpen(!open);

  return (
    <div className="relative p-2 inline-block items-center " ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 px-4 py-2 text-black  bg-gray-200 hover:bg-gray-300  focus:outline-none"
      >
        BBC in other languages
        <FaChevronDown className="text-sm text-black" />
      </button>

      {open && (
        <div className="  mt-2 w-fit bg-gray-100 p-5  ">
          <div className="py-1 w-full flex flex-col items-center text-center">
            <a className="p-2 text-gray-800 font-bold font-serif text-xl">
              The BBC is in multiple languages
            </a>
            <a className="p-2 text-gray-800 hover:bg-gray-100">
              Read the BBC in your own language
            </a>
          </div>

          <div>
            <ul className="flex flex-col sm:flex-row gap-2 mt-2 text-xs text-black">
              <li className="hover:underline hover:cursor-pointer">
                Tamil தமிழில் செய்திகள்
              </li>
              <li className="hover:underline hover:cursor-pointer">
                French AFRIQUE
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Hindi हिन्दी
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Kirundi KIRUNDI
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Telugu తెలుగు వార్తలు
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Gujarati ગુજરાતીમાં સમાચાર
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Marathi मराठी
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Punjabi ਪੰਜਾਬੀ ਖ਼ਬਰਾਂ
              </li>
              <li className="hover:underline hover:cursor-pointer">
                French AFRIQUE
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Nepali नेपाली
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Portuguese BRASIL
              </li>
              <li className="hover:underline hover:cursor-pointer">Pidgin</li>
              <li className="hover:underline hover:cursor-pointer">
                Serbian NA SRPSKOM
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Somali SOMALI
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LangDrop;
