const OnlyBbc = ({ data }) => {
  return (
    <>
      <h1 className="px-4 py-2 font-extrabold text-sm">ONLY FROM THE BBC </h1>
      <div className="flex flex-col sm:flex-row h-fit p-2">
        <div className="flex flex-col w-full sm:w-1/2 m-2">
          <img
            src={data?.[11]?.urlToImage}
            alt="News"
            className="w-full sm:w-[640px] h-[350px] object-cover"
          />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
            {data?.[11]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[11]?.description}
          </p>
          <p className="p-2 mt-5 text-sm">9 hrs ago | Future</p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 m-2">
          <img
            src={data?.[12]?.urlToImage}
            alt="News"
            className="w-full sm:w-[640px] h-[350px] object-cover"
          />
          <p className="flex text-base font-serif p-2 font-bold hover:cursor-pointer hover:underline">
            {data?.[12]?.title}
          </p>
          <p className="text-sm text-gray-600 p-2 hidden font-serif sm:block">
            {data?.[12]?.description}
          </p>
          <p className="p-2 mt-5 text-sm">3 hrs ago | USA</p>
        </div>
      </div>

      <footer className=" h-12  bg-blue-white py-4"></footer>
    </>
  );
};

export default OnlyBbc;
