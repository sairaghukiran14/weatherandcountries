// let fetchres = fetch("https://restcountries.com/v3.1/all");

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

let city = "";
let count = 0;
let weatherreport = document.querySelector(".weatherreport");
let container = document.getElementsByClassName("container")[0];

const allCountriesData = await fetchCountries();
allCountriesData.map(displaycountry);
function displaycountry(x) {
  try {
    let coun = document.createElement("div");
    coun.classList.add("country");

    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = x.name.common;
    coun.appendChild(header);

    let image = document.createElement("img");
    image.src = x.flags.svg;

    coun.appendChild(image);

    let capital = document.createElement("div");
    capital.classList.add("cap");
    let t = !x.capital[0] ? "" : x.capital[0];
    capital.innerHTML = "Capital : " + t;
    coun.appendChild(capital);

    let region = document.createElement("div");
    region.classList.add("region");
    region.innerHTML = "Region : " + x.region;
    coun.appendChild(region);

    let countrycode = document.createElement("div");
    countrycode.classList.add("countrycode");
    countrycode.innerHTML = "CountryCode : " + x.cioc;
    coun.appendChild(countrycode);

    let btn = document.createElement("button");
    btn.innerText = "Click for Weather";
    btn.classList.add("mybtn");
    btn.id = t;
    coun.appendChild(btn);

    container.appendChild(coun);

    //console.log(count++);
  } catch (e) {}

  //console.log(x.name.common, x.capital[0], x.region, x.flags.png);
}
document.querySelector(".mybtn").addEventListener("click", getW);

async function getW(e) {
  const fff = document.querySelector(".mybtn").id;
  city = fff;
  const fetchweather = async () => {
    const res1 = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=61f598523332266feb464d60b3ffa03b"
    );
    const data = await res1.json();
    return data;
  };
  let countryweather = await fetchweather();
  let k =
    countryweather.weather[0].main +
    " " +
    countryweather.weather[0].description;
  weatherreport.innerHTML = !k ? "" : k;
}
