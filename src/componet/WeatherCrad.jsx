import { useContext, useEffect, useState } from "react";
import weatherContext from "../Context/weather/WeatherContext";
import { fetchWeather } from "../Context/WeatherService";

const WeatherCrad = () => {
  const { WeatherData, dispatch } = useContext(weatherContext);
  const [text, setText] = useState("");

  const getWeather = async (city) => {
    const data = await fetchWeather(city);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(text);
    setText("");
  };

  useEffect(() => {
    getWeather("indore");
  }, []);

  return (
    <div className="h-64 p-4 border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg rounded-lg bg-white dark:bg-gray-800 transition duration-300 col-span-1">
  {/* Weather Title */}
  <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
    Today's Weather
  </h1>

  {/* Weather Information */}
  <div className="flex flex-col items-center justify-center">
    {/* Temperature */}
    <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-300">
      {WeatherData?.current?.temp_c}°C
    </h1>

    {/* Location */}
    <p className="text-xl text-gray-600 dark:text-gray-300 mt-1">
      {WeatherData?.location?.name}
    </p>

    {/* Weather Icon & Condition */}
    <div className="flex items-center justify-center mt-2">
      <img
        className="w-12 h-12"
        src={WeatherData?.current?.condition?.icon}
        alt="Weather Icon"
      />
      <p className="text-md text-gray-600 dark:text-gray-300 ml-2">
        {WeatherData?.current?.condition?.text}
      </p>
    </div>
  </div>

  {/* Search Form */}
  <form onSubmit={handleSubmit} className="mt-4 flex items-center">
    <input
      className="w-4/5 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
      type="text"
      placeholder="Enter Your City"
      required
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button
      type="submit"
      className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-4 py-2 rounded-r-md hover:from-green-500 hover:to-green-700 transition"
    >
      Search
    </button>
  </form>
</div>

  );
};

export default WeatherCrad;
