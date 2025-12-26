# 🌦️ WeatherNow – Weather App

WeatherNow is a simple and modern weather application built using **HTML, CSS, and JavaScript**.  
It shows **current weather details** and a **5-day forecast** using the **OpenWeatherMap API**.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Current temperature (°C)
- 💧 Humidity & 🌬️ wind speed
- 📅 5-day weather forecast
- 🌄 Dynamic background based on weather conditions
- 🎨 Clean & responsive UI

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API
- Google Fonts (Inter, Montserrat)

---

## 📸 Preview

> Background changes automatically based on weather (Clear, Rain, Clouds, Mist, Haze, etc.)

---

## ⚙️ How It Works

1. User enters a **city name**
2. App fetches:
   - Current weather from `/weather` API
   - 5-day forecast from `/forecast` API
3. Forecast data is filtered to show **one entry per day (12:00 PM)**
4. Data is rendered dynamically on the UI

---

## 📂 Project Structure

WeatherNow/
│
├── index.html
├── styles.css
├── script.js
├── assets/
│ ├── clear.jpg
│ ├── rain.jpg
│ ├── cloudy.jpg
│ ├── foggy.jpg
│ └── icons/
└── README.md


---

## 🔑 API Used
- **OpenWeatherMap**
  - https://openweathermap.org/api

> Make sure to replace your API key in `script.js`:
```js
const apikey = "a1d65611d429aa127e1b410cdad68075";


🧠 Key Learnings
Working with fetch() and Promises
Handling asynchronous data

DOM manipulation
Filtering API data
Conditional UI rendering
Error handling

🐛 Known Issues
Background images depend on exact weather condition names
Forecast UI can be enhanced further with animations

👨‍💻 Author
Ayushman
Frontend Developer (Learning & Building 🚀)

⭐ Support
If you like this project, don’t forget to star ⭐ the repository!
