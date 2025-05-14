import React, { useContext, useState } from "react";
import NewsContext from "../Context/News/NewsContext";
import { fetchNews } from "../Context/News/NewsService";

const SearchForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    getNews(text);
    setText("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Search Any News On The Planet
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 shadow-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
