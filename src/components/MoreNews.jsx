import React from "react";

const MoreNews = ({ data }) => {
  return (
    <div>
      <h1 className="px-4 py-2 font-extrabold text-sm">MORE TOP NEWS</h1>

      <div className="flex flex-col sm:flex-row gap-4 m-2 h-fit">
        <div className="flex flex-col w-full sm:w-96 bg-white">
          <div className="flex justify-center items-center">
            <img
              src={data?.[4]?.urlToImage}
              alt="News"
              className="w-full sm:w-[330px] h-[170px] object-cover"
            />
          </div>

          <div className="flex flex-col p-2 gap-2">
            <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
              {data?.[4]?.title}
            </p>

            <p className="text-sm text-gray-600 p-2 font-serif hidden sm:block">
              {data?.[4]?.description}
            </p>
            <hr className="bg-gray-300 h-px border-0 my-4" />
          </div>
          <div className="p-2">
            <img
              src={data?.[5]?.urlToImage}
              alt="News"
              className="w-full sm:w-[330px] h-[170px] object-cover"
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
              {data?.[5]?.title}
            </p>

            <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
              {data?.[5]?.description}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 bg-white h-auto sm:h-80">
          <img
            src={data?.[6]?.urlToImage}
            alt="News"
            className="w-full sm:w-[700px] h-[250px] sm:h-[400px] object-cover"
          />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
            {data?.[6]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[6]?.description}
          </p>
          <p className="p-2 mt-6 sm:mt-12 text-sm">3 hrs ago | Technology</p>
        </div>

        <div className="w-full sm:w-72 bg-white h-auto sm:h-80">
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
            {data?.[7]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[7]?.description.slice(0, 70)}
          </p>
          <p className="p-2 text-sm">1 hrs ago | Technology</p>
          <hr className="bg-gray-300 h-px border-0 my-4" />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
            {data?.[10]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[10]?.description.slice(0, 60)}
          </p>
          <p className="p-2 text-sm ">5 hrs ago | Technology</p>
          <hr className="bg-gray-300 h-px border-0 my-4" />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
            {data?.[9]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[9]?.description.slice(0, 100)}
          </p>
          <p className="p-2 text-sm ">2 hrs ago | Technology</p>
          <hr className="bg-gray-300 h-px border-0 my-4" />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline ">
            {data?.[8]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[8]?.description.slice(0, 50)}
          </p>
          <p className="p-2 text-sm ">4 hrs ago | Technology</p>
        </div>
      </div>

      <footer className=" h-20  bg-white py-4"></footer>
      <hr className="bg-gray-700 h-1"></hr>
    </div>
  );
};

export default MoreNews;
