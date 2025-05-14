export const fetchNews = async (topic) => {
  // Get the current date in IST and subtract one day
  const istDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  istDate.setDate(istDate.getDate() - 1);

  // Format the date to YYYY-MM-DD
  const formattedDate = istDate.toISOString().split("T")[0];

  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${topic}&sortby=relevance&token=3dea4c8757efce4d377da196a2a956db`
  );

  const data = await response.json();
  console.log(data.articles)
  return data.articles;
};
