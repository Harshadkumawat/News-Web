import React from "react";
import Navbar from "./componet/Navbar";
import Home from "./pages/Home";
import { WeatherProvider } from "./Context/weather/WeatherContext";
import { NewsProvider } from "./Context/News/NewsContext";

const app = () => {
  return (
    <>
      <NewsProvider>
        <WeatherProvider>
          <Navbar />
          <Home />
        </WeatherProvider>
      </NewsProvider>
    </>
  );
};

export default app;
