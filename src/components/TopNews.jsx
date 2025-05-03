import { GrFormNext } from "react-icons/gr";

const TopNews = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="flex items-center">
        <h1 className="px-4 py-2 font-extrabold text-sm">TOP NEWS</h1>
        <GrFormNext className="text-xl p-0" />
      </div>

      <div>
        <div className="flex flex-col sm:flex-row items-start bg-white w-full h-auto sm:h-52 p-4 sm:p-10 gap-4 sm:gap-6">
          <div className="flex flex-col">
            <p className="text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
              {data?.[14]?.title}
            </p>
            <p className="p-2 text-sm">6 hrs ago | Asia</p>
          </div>

          <div className="flex flex-col">
            <p className="text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
              {data?.[15]?.title}
            </p>
            <p className="p-2 text-sm">10 hrs ago | Middle East</p>
          </div>

          <div className="flex flex-col">
            <p className="text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
              {data?.[16]?.title}
            </p>
            <p className="p-2 text-sm">2 hrs ago | Europe</p>
          </div>

          <div className="flex flex-col">
            <p className="text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
              {data?.[17]?.title}
            </p>
            <p className="p-2 text-sm">5 hrs ago | India</p>
          </div>
        </div>
      </div>
      <footer className=" h-12  bg-blue-white py-4"></footer>
    </>
  );
};

export default TopNews;
