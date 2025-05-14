import React, { useContext, useEffect } from "react";
import SearchFrom from "../componet/SearchFrom";
import Topics from "../componet/Topics";
import WeatherCrad from "../componet/WeatherCrad";
import NewsCard from "../componet/NewsCard";
import NewsContext from "../Context/News/NewsContext";
import { fetchNews } from "../Context/News/NewsService";

const Home = () => {
  const { dispatch, allNews } = useContext(NewsContext);

  const getNews = async (tpoic) => {
    const data = await fetchNews(tpoic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("indore");
  }, []);

  return (
    <>
      <div className="container mx-auto p-10">
        <div className=" p-5  rounded-sm mt-5 ">
          <SearchFrom />
          <Topics />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WeatherCrad />
          <div className="p-3 border shadow col-span-1 md:col-span-2">
            {!allNews || allNews.length === 0 ? (
              <>
                <h1 className="text-center my-2 font-bold text-gray-400">
                  Fetching News
                </h1>
              </>
            ) : (
              allNews.map((news, index) => <NewsCard key={index} news={news} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
