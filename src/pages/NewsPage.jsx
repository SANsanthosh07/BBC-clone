import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import axios from "axios";
import Navbar from "../components/Navbar";
import MoreNews from "../components/MoreNews";
import TopNews from "../components/TopNews";

const NewsPage = () => {
  const [news, setNews] = useState(null);

  const getNews = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=f2a5829605344287adcfc65c99464e14"
    );
    setNews(res?.data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Navbar />
      <Menu />
      <h1 className="text-2xl font-bold text-red-700 text-center mt-4">NEWS</h1>
      <MoreNews data={news} />

      {news && news.length > 0 ? (
        <Carousel data={news} />
      ) : (
        <p className="text-center mt-4 text-gray-500">Loading...</p>
      )}
      <TopNews data={news} />

      <Footer />
    </>
  );
};

export default NewsPage;
