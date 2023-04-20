let city = "London";
const fetchweather = async (city_name) => {
  const res1 = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=61f598523332266feb464d60b3ffa03b"
  );
  const data = await res1.json();
  return data;
};
let countryweather = await fetchweather();
console.log(countryweather.weather[0].description);
