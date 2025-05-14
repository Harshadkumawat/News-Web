export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=2323e745b06640d7a5652736251601&q=${city}&aqi=yes`
  );
  const data = await response.json();
  return data;
};
