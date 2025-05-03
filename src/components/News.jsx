import React from "react";
import { Card } from "antd";

const News = (props) => {
  const { data } = props;
  // console.log(data);

  return (
    <>
      <div>
        <div className="flex justify-center p-1 gap-[2px] cursor-pointer mt-12 ">
          <div className="relative flex items-center justify-center w-4 h-4 mt-1">
            <div className="absolute w-4 h-4 rounded-full bg-red-600" />
            <div className="absolute w-3 h-3 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-red-600 z-10" />
          </div>
          <p className="font-bold text-red-600 ml-1">LIVE</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full bg-gray-100">
          <header className="text-center text-black text-4xl leading-[96px] bg-white font-bold hover:underline cursor-pointer font-serif">
            {data?.[0]?.title}
          </header>

          <div className="flex flex-col lg:flex-row bg-white hover:cursor-pointer">
            <aside className="flex justify-center items-center lg:m-10  min-h-[200px] w-full lg:w-2/3">
              <img
                src={data?.[0]?.urlToImage}
                alt="News"
                className="w-full h-full object-cover"
              />
            </aside>

            <main className="w-full lg:w-1/3 text-xl flex-col bg-white text-black cursor-pointer  font-semibold">
              <div className="mt-6 p-4 rounded">
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li className="hover:underline p-2">
                    Garmin Vivoactive 6 vs Fitbit Sense 2,body sensors such as
                    pedometers
                  </li>
                  <hr className="bg-gray-300 h-px border-0 my-4" />

                  <li className="hover:underline p-2">
                    Top Smartwatches for Runners in 2025,Software may include
                    maps, health and exercise-related apps
                  </li>
                  <hr className="bg-gray-300 h-px border-0 my-4" />
                  <li className="hover:underline p-2">
                    How Garmin Tracks,heart rate monitoring, fitness tracking,
                    sleep analysis, and seamless
                  </li>
                  <hr className="bg-gray-300 h-px border-0 my-4" />
                  <li className="hover:underline p-2">
                    An LTE smartwatch is a smartwatch that uses the cellular
                    network (4G or LTE),Smartwatches with GPS
                  </li>
                  <hr className="bg-gray-300 h-px border-0 my-4" />
                  <li className="hover:underline p-2">
                    If you take occasional calls on your watchBest Smartwatches
                    under $300
                  </li>
                </ul>
              </div>
            </main>
          </div>

          <footer className="text-center h-20 text-white bg-white py-4"></footer>

          <div className="flex flex-col sm:flex-row bg-white p-5 hover:cursor-pointer items-center gap-4">
            <Card
              style={{ borderRadius: "0", padding: "0px" }}
              className="w-full sm:w-[450px] h-[410px] rounded-none"
            >
              <img
                src={data?.[1]?.urlToImage}
                alt="News"
                className="w-full h-[200px] object-cover hover:cursor-pointer hover:underline"
              />
              <p className="text-xl font-serif font-bold hover:cursor-pointer hover:underline p-2">
                {data?.[1]?.title}
              </p>
              <p className="p-2 hidden sm:block font-serif ">
                {data?.[1]?.description}
              </p>
            </Card>

            <Card
              style={{ borderRadius: "0", padding: "0px" }}
              className="w-full sm:w-[450px] h-[410px] rounded-none"
            >
              <img
                src={data?.[2]?.urlToImage}
                alt="News"
                className="w-full h-[200px] object-cover hover:cursor-pointer hover:underline"
              />
              <p className="text-xl font-serif font-bold hover:cursor-pointer hover:underline p-2">
                {data?.[2]?.title}
              </p>
              <p className="p-2 hidden sm:block font-serif">
                {data?.[2]?.description}
              </p>
              <p className="p-2 text-sm ">10 hrs ago | Future</p>
            </Card>

            <Card
              style={{ borderRadius: "0", padding: "0px" }}
              className="w-full sm:w-[450px] h-[410px] rounded-none"
            >
              <img
                src={data?.[3]?.urlToImage}
                alt="News"
                className="w-full h-[200px] object-cover hover:cursor-pointer hover:underline"
              />
              <p className="text-xl font-serif font-bold hover:cursor-pointer hover:underline p-2">
                {data?.[3]?.title}
              </p>
              <p className="p-2 hidden sm:block font-serif">
                {data?.[3]?.description}
              </p>
              <p className="p-2 text-sm ">6 hrs ago | Technology</p>
            </Card>
          </div>

          <hr className="bg-gray-700 h-1"></hr>
        </div>
      </div>
    </>
  );
};
export default News;
