'use strict';
const userInput = document.querySelector('input');
const weatherImg = document.querySelector('.weather-img');
const currentTemp = document.querySelector('.current-temp');
const weatherInfo = document.querySelector('.weather-info');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const search = document.querySelector('.fa');

async function weather(area) {
  const apiKey = 'fbab290dd414e7ffd5cdbbd6ef045428';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${apiKey}`;
  const weatherData = await fetch(`${url}`).then(response => response.json());
  currentTemp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  weatherInfo.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  windSpeed.innerHTML = `${weatherData.wind.speed}km/h`;
  const weatherImage = function (con) {
    weatherImg.src = `/img/${con}.png`;
  };
  weatherImage(weatherData.weather[0].main.toLowerCase());
}
search.addEventListener('click', function () {
  weather(userInput.value);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    weather(userInput.value);
  }
});
