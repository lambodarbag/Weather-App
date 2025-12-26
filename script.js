const input = document.querySelector("input[type='text']");
const button = document.querySelector("input[type='button']");
const body = document.querySelector("body");

const cityE1 = document.querySelector(".cityE1");
let condition = document.querySelector(".condition");
let temperature = document.querySelector(".temperature");
const weatherDeatails = document.querySelector(".details");

const forecastContainer = document.querySelector(".forecast")

// const video = document.getElementById("bgVideo");

let weatherData;
let defaultCity = "New Delhi";

// video.playbackRate = 0.3;

window.addEventListener("load", () => {
  const apikey = "a1d65611d429aa127e1b410cdad68075";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apikey}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${apikey}&units=metric`;
  apiCall(URL);
  getFiveDayForecast(forecastURL);
});

button.addEventListener("click", () => {
  const city = input.value.trim();

  if (!city) {
    console.error("City name cannot be empty");
    return;
  }
  const apikey = "a1d65611d429aa127e1b410cdad68075";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;

  apiCall(URL);
  getFiveDayForecast(forecastURL);
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
    .catch((err) => console.error("Error fetching weather:", err.message));
}

function renderUI(data) {
  weatherData = data;
  cityE1.textContent = weatherData.name;
  condition.textContent = weatherData.weather[0].main;

  const weatherCondition = weatherData.weather[0].main;

  switch (weatherCondition) {
    case "Clear":
      if (weatherData.name === "New York") {
        body.style.backgroundImage = "url('assets/newyork.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";
        break;
      }

      body.style.backgroundImage = "url('assets/clear.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "bottom";
      body.style.backgroundRepeat = "no-repeat";
      break;

    case "Rain":
      body.style.backgroundImage = "url('assets/rain.jpg')";
      body.style.backgroundRepeat = "no-repeat";
      break;

    case "Clouds":
      body.style.backgroundImage = "url('assets/cloudy.jpg')";
      body.style.backgroundRepeat = "no-repeat";
      break;

    case "Mist":
      body.style.backgroundImage = "url('assets/foggy.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      break;

    case "Smoke":
      body.style.backgroundImage = "url('assets/smoke.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      break;

      case "Haze":
      body.style.backgroundImage = "url('assets/haze.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      break;
  }

  temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;

  weatherDeatails.textContent = `Humidity: ${weatherData.main.humidity} % | Wind Speed: ${weatherData.wind.speed} m/s`;
  
}

// 5day forecast feature

  function getFiveDayForecast(forecastURL) {
  fetch(forecastURL)
    .then(res => {
      if (!res.ok) {
        throw new Error("Forecast data not found");
      }
      return res.json();
    })
    .then(data => {
      const dailyForecast = extractFiveDays(data.list);
      renderForecast(dailyForecast);
    })
    .catch(err => console.error("Forecast Error:", err.message));
}

function extractFiveDays(list) {
  const map = {};

  list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!map[date]) {
      map[date] = item;
    }
});

  return Object.values(map).slice(0, 5);
}




  function renderForecast(days) {
    console.log(days);
    forecastContainer.innerHTML = ""; // clear old forecast

    days.forEach((dayData) => {
      const date = new Date(dayData.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

      const temp = Math.round(dayData.main.temp);
      const iconCode = dayData.weather[0].icon;

      const dayDetails = document.createElement("div");
      dayDetails.className = "day-details";

      dayDetails.innerHTML = `
      <div class="day">${dayName}</div>
      <div class="days">
        <div class="icon">
          <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="">
        </div>
        <span>${temp}°C</span>
      </div>
    `;

      forecastContainer.appendChild(dayDetails);
    });
  }


