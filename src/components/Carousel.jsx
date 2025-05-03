import { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      if (direction === "left") {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const fullScrollLeft = container.scrollWidth - container.clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < fullScrollLeft - 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <div className="bg-black w-full h-[500px] p-2">
      <hr className="bg-white h-0.5 mt-2" />
      <div className="flex justify-between items-center">
        <h1 className="px-4 py-2 text-white font-extrabold text-sm">
          Discover more from the BBC
        </h1>
        <div className="flex items-center gap-3 h-14">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex items-center justify-center w-[30px] h-[30px] text-white hover:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex items-center justify-center w-[30px] h-[30px] text-white hover:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-scroll scroll-smooth px-4 sm:px-10 py-4 scrollbar-hide"
      >
        {data?.slice(21, 29)?.map((item, index) => (
          <div
            key={index}
            className="w-[250px] sm:w-[300px] flex-shrink-0 flex flex-col gap-2"
          >
            <img
              src={item.urlToImage}
              alt="News"
              className="w-full h-[120px] sm:h-[150px] object-cover hover:cursor-pointer hover:underline"
            />
            <p className="p-1 sm:p-2 text-white text-sm font-bold hover:cursor-pointer hover:underline">
              {item.title}
            </p>
            <p className="p-1 sm:p-2 text-white hidden sm:block font-serif">
              {item.description
                ? item.description.slice(0, 100)
                : "No description available."}
            </p>
            <p className="p-1 sm:p-2 text-white text-sm">1 day ago | Earth</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
