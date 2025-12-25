const input = document.querySelector("input[type='text']");
const button = document.querySelector("input[type='button']");
const body = document.querySelector("body");

const cityE1 = document.querySelector(".cityE1");
let condition = document.querySelector(".condition");
let temperature = document.querySelector(".temperature");

let weatherData;
let defaultCity = "Delhi";


button.addEventListener("click", () => {
  const city = input.value.trim();

  if (!city) {
    console.error("City name cannot be empty");
    return;
  }
  const apikey = "a1d65611d429aa127e1b410cdad68075";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  apiCall(URL);

});

function apiCall(URL) {
  fetch(URL)
    .then((Response) => {
      if (!Response.ok) {
        throw new Error("City not found or network error");
      }
      return Response.json();
    })
    .then((data) => {
        renderUI(data);
    })
    .catch(err => console.err("Error fetching weather:", err.message))
}

function renderUI(data) {
  weatherData = data;
  cityE1.textContent = weatherData.name;
  condition.textContent = weatherData.weather[0].main;
  console.log(condition.textContent.typeof);

  const weatherCondition = weatherData.weather[0].main;

    switch (weatherCondition) {
      case "Clear":
       body.style.backgroundImage = "url('assets/sunny.jpg')";
        break;

      case "Rain":
       body.style.backgroundImage = "url('assets/rain.jpg')";
       break;

      case "Clouds":
       body.style.backgroundImage = "url('assets/cloudy.jpg')";
        break;

      case "Mist":
       body.style.backgroundImage = "url('assets/foggy.jpg')";
        break;
   }


    temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;
  console.log(weatherData.weather[0]);
}