import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg bg-white dark:bg-gray-800 transition duration-300">
    {/* News Image */}
    <div className="w-full md:w-2/5 flex items-center justify-center">
      <img
        src={news.image || "https://source.unsplash.com/random/300x300"}
        onError={(e) => {
          e.target.src = "https://source.unsplash.com/random/300x300";
        }}
        className="h-60 w-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        alt={news.title || "News Image"}
      />
    </div>
  
    {/* News Content */}
    <div className="w-full md:w-3/5 mt-4 md:mt-0 md:ml-6">
      <h1 className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-2">
        {news.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mb-3">
        {news.description}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
        <strong>Author:</strong> {news.author || "Unknown"}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        <strong>Date:</strong> {new Date(news.publishedAt).toLocaleDateString("en-IN")}
      </p>
  
      {/* Read More Button */}
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-green-400 to-green-600 py-2 px-6 rounded-full text-white font-semibold hover:from-green-500 hover:to-green-700 transition duration-300 shadow-md"
      >
        Read More
      </a>
    </div>
  </div>
  
  );
};

export default NewsCard;
