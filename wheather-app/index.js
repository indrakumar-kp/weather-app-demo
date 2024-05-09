const apiKey = "928ca90ee0fb5052d2eeb0636de6ac75";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/hr";
  document.querySelector(".wheather").style.display = "block";
  if (data.weather[0].main == "Clear") {
    weatherIcon.src =
      "https://img.icons8.com/?size=80&id=dkcTZNCSptLY&format=png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3222/3222791.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
