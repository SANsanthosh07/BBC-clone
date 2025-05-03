import React from "react";

const EmailFooter = () => {
  return (
    <div className="bg-black p-10">
      <div className="flex flex-col bg-black">
        <p className="text-white font-bold text-base">
          Find out more about BBC accounts
        </p>
      </div>
      <hr className="h-0.5 mt-2 bg-white w-full " />
      <div className="">
        <ul className="flex gap-3 text-sm text-white mt-2">
          <li className="hover:underline hover:cursor-pointer">Terms of Use</li>
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
      <p className="text-sm text-white mt-3">
        Copyright 2025 BBC. All rights reserved. The BBC is not responsible for
        the content of externalsites.
        <span className="text-black font-semibold hover:cursor-pointer">
          Read about our approach to external linking.
        </span>
      </p>
    </div>
  );
};

export default EmailFooter;
