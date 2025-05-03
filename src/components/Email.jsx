import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Email = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.trim() || "") {
      localStorage.setItem("userEmail", email);
      navigate("/");
    } else {
      alert("Please enter a valid email");
    }
  };
  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div
        onClick={handleClose}
        className="absolute top-4 right-4 text-4xl w-10 h-10 p-1 flex items-center justify-center font-bold text-white hover:cursor-pointer"
      >
        <MdOutlineCancelPresentation />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2 mt-5">
          <span className="bg-white text-black w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center">
            B
          </span>
          <span className="bg-white text-black w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center">
            B
          </span>
          <span className="bg-white text-black w-[30px] h-[30px] font-bold text-[24px] flex items-center justify-center">
            C
          </span>
        </div>

        <div className="w-[450px] flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-white text-4xl font-bold">
              Register for a BBC account
            </p>
            <p className="text-white text-lg mt-12">
              You must be 18 or over to register for a BBC account
            </p>
          </div>

          <div className="w-[450px] flex flex-col items-center gap-6 mt-6">
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-gray-200 text-white px-2 py-2 focus:outline-none 
              placeholder:text-gray-400 placeholder:font-bold placeholder:text-xl"
            />

            <button
              onClick={handleContinue}
              className="w-full h-12 bg-blue-500 text-white font-bold hover:bg-blue-700 hover:cursor-pointer"
            >
              Continue
            </button>
          </div>

          <div className="flex flex-col mr-30 items-start">
            <p className="text-white text-lg">
              Already have a BBC account?
              <span className="underline hover:cursor-pointer text-base">
                Sign in now
              </span>
            </p>
            <p className="text-blue-500 underline hover:cursor-pointer text-lg">
              Get help signing in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
