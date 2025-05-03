import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNews = location.pathname === "/news";

  return (
    <div className="sticky top-16 z-40 bg-white">
      <hr className="h-px bg-gray-100 border-none invisible lg:visible" />
      <div className="w-[1200px] h-auto hidden lg:block mx-auto">
        <ul className="flex justify-center items-center ml-12 text-sm font-semibold">
          <li
            className={`hover:bg-gray-200 p-2 cursor-pointer border-b-4 ${
              isHome ? "border-black" : "border-transparent"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/news"
              className={`hover:bg-gray-200 p-2 cursor-pointer border-b-4 ${
                isNews ? "border-red-700" : "border-transparent"
              }`}
            >
              News
            </Link>
          </li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">
            <Link to="/sport">Sport</Link>
          </li>

          <li className="hover:bg-gray-200 p-2 cursor-pointer">Business</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Innovation</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Culture</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Art</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Travel</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Earth</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Audio</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Video</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer">Live</li>
        </ul>
        <hr className="h-px bg-gray-100 border-none mt-1" />
      </div>
    </div>
  );
};

export default Menu;
