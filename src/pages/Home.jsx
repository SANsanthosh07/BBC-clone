import { useEffect, useState } from "react";
import News from "../components/News";
import axios from "axios";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import MoreNews from "../components/MoreNews";
import OnlyBbc from "../components/OnlyBbc";
import PodcastCard from "../components/Podcastcard";
import TopNews from "../components/TopNews";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  const [news, setNews] = useState(null);

  const getNews = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=f2a5829605344287adcfc65c99464e14"
    );
    setNews(res?.data?.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  // console.log(news);

  return (
    <div>
      <Navbar />
      <Menu />
      {news && news.length > 0 ? (
        <News data={news} />
      ) : (
        <p className="text-center mt-4 text-gray-500">Loading...</p>
      )}
      <MoreNews data={news} />
      <OnlyBbc data={news} />
      <PodcastCard data={news} />
      <TopNews data={news} />
      <Carousel data={news} />

      <Footer />
    </div>
  );
};
export default Home;
