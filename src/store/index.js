import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    AllLocation: [],
    AllWeather: [],
    dataStatus: false,
    LocationStatus: false,
    DegreeCelsius: true,
  },
  mutations: {
    SET_WEATHER(state, weatherData) {
      state.AllWeather = weatherData;
      state.dataStatus = true;
      console.log(state.AllWeather);
    },
    SET_LOCATION(state, locationData) {
      state.AllLocation = locationData;
      state.LocationStatus = true;
    },
    ChangeDegree(state) {
      state.DegreeCelsius = !state.DegreeCelsius
      if (state.DegreeCelsius) {
        state.AllWeather.consolidated_weather.forEach(weather => {
          weather.the_temp = (weather.the_temp - 32)/1.8
          weather.max_temp = (weather.max_temp - 32)/1.8
          weather.min_temp = (weather.min_temp - 32)/1.8

        });
        //state.AllWeather.consolidated_weather[0].the_temp = (state.AllWeather.consolidated_weather[0].the_temp - 32)/1.8
      } else {
        state.AllWeather.consolidated_weather.forEach(weather => {
          weather.the_temp = (weather.the_temp*1.8) + 32
          weather.max_temp = (weather.max_temp*1.8) + 32
          weather.min_temp = (weather.min_temp*1.8) + 32
        });
      }
    },
  },
  actions: {
    WeatherDefault({ commit }) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/"
        )
        .then((response) => {
          commit("SET_WEATHER", response.data);
        });
    },
    SearchPosition({ dispatch }, positions) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${positions.latitude},${positions.longitude}`
        )
        .then((response) => {
          dispatch("WeatherByLocation", response.data[0].woeid);
        });
    },
    SearchLocations({ commit }, name) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${name.replace(
            /\s/g,
            "%20"
          )}`
        )
        .then((response) => {
          commit("SET_LOCATION", response.data);
        });
    },
    WeatherByLocation({ commit }, woeid) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
        )
        .then((response) => {
          commit("SET_WEATHER", response.data);
        });
    },
  },
});
