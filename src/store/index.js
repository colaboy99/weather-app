import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    SearchLocation: [],
    AllWeather: [],
    dataSatatus: false,
  },
  mutations: {
    SET_WEATHER(state, weatherData) {
      state.AllWeather = weatherData;
      state.dataSatatus = true;
    },
  },
  actions: {
    WeatherDefault({ commit }) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418"
        )
        .then((response) => {
          commit("SET_WEATHER", response.data);
        });
    },
    WeatherByLocation({ commit }, positions) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${positions.latitude},${positions.longitude}`
        )
        .then((response) => {
          let woeid = response.data[0].woeid;
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
            )
            .then((response) => {
              commit("SET_WEATHER", response.data);
            });
        });
    },
  },
});
