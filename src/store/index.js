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
    },
    SET_LOCATION(state, locationData) {
      state.AllLocation = locationData;
      state.LocationStatus = true;
      console.log(state.AllLocation);
    },
    ChangeDegree(state) {
      state.DegreeCelsius = !state.DegreeCelsius;
    },
  },
  actions: {
    WeatherDefault({ commit }) {
      axios
        .get(
          "https://api.weatherapi.com/v1/forecast.json?key=74419b600fef4a8eb9e111632221707&q=Barcelona&days=5&aqi=no&alerts=no"
        )
        .then((response) => {
          commit("SET_WEATHER", response.data);
        });
    },
    SearchPosition({ dispatch }, positions) {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=74419b600fef4a8eb9e111632221707&q=${positions.latitude},${positions.longitude}&days=5&aqi=no&alerts=no`
        )
        .then((response) => {
          dispatch("WeatherByLocation", response.data.location.name);
        });
    },
    SearchLocations({ commit }, name) {
      axios
        .get(
          `https://api.weatherapi.com/v1/search.json?key=74419b600fef4a8eb9e111632221707&q=${name}`
        )
        .then((response) => {
          commit("SET_LOCATION", response.data);
        });
    },
    WeatherByLocation({ commit }, name) {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=74419b600fef4a8eb9e111632221707&q=${name}&days=5&aqi=no&alerts=no`
        )
        .then((response) => {
          commit("SET_WEATHER", response.data);
        });
    },
  },
});
