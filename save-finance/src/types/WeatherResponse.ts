// https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=en&appid=5ee1d8fbc64f743ff0e4d3a176a515c2&units=metric

const data = {
  coord: {
    lon: 37.6156,
    lat: 55.7522,
  },
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10n',
    },
  ],
  base: 'stations',
  main: {
    temp: 9.51,
    feels_like: 7.92,
    temp_min: 9,
    temp_max: 10,
    pressure: 1006,
    humidity: 81,
  },
  visibility: 9000,
  wind: {
    speed: 3,
    deg: 140,
  },
  rain: {
    '1h': 0.84,
  },
  clouds: {
    all: 40,
  },
  dt: 1620235538,
  sys: {
    type: 1,
    id: 9027,
    country: 'RU',
    sunrise: 1620178663,
    sunset: 1620234880,
  },
  timezone: 10800,
  id: 524901,
  name: 'Moscow',
  cod: 200,
};

export type WeatherResponse = typeof data;
