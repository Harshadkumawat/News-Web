import React, { useContext } from "react";
import NewsContext from "../Context/News/NewsContext";
import { fetchNews } from "../Context/News/NewsService";

const Topics = () => {
  const { dispatch } = useContext(NewsContext);

  const getNews = async (tpoic) => {
    const data = await fetchNews(tpoic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  return (
    <>
      <div className="flex m-1 justify-center flex-wrap  py-4">
        <p
          onClick={() => getNews("Indian Sports")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Sports
        </p>
        <p
          onClick={() => getNews("International")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          International Affairs
        </p>
        <p
          onClick={() => getNews("Technology")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Technology
        </p>
        <p
          onClick={() => getNews("Business and Economy")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Business and Economy
        </p>
        <p
          onClick={() => getNews("Stock Market")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Stock Market
        </p>
        <p
          onClick={() => getNews("Entertainment")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Entertainment
        </p>
        <p
          onClick={() => getNews("Science and Medicine")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Science and Medicine
        </p>
        <p
          onClick={() => getNews("Cars")}
          className="bg-gray-100 text-black px-4 py-2 rounded-md m-1 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          Cars
        </p>
      </div>
    </>
  );
};

export default Topics;
