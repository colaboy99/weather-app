import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    AllLocation: [],
    AllWeather: [],
    dataStatus: false,
    LocationStatus: false
  },
  mutations: {
    SET_WEATHER(state, weatherData) {
      state.AllWeather = weatherData;
      state.dataStatus = true;
    },
    SET_LOCATION(state, locationData) {
      state.AllLocation = locationData;
      state.LocationStatus = true;
    }
  },
  actions: {
    WeatherDefault({ commit }) {
      axios
        .get(
          "https://www.metaweather.com/api/location/44418/"
        )
        .then((response) => {
          console.log("here")
          commit("SET_WEATHER", response.data);
        });
    },
    WeatherByLocation({ commit }, positions) {
      axios
        .get(
          `https://www.metaweather.com/api/location/search/?lattlong=${positions.latitude},${positions.longitude}`
        )
        .then((response) => {
          let woeid = response.data[0].woeid;
          axios
            .get(
              `https://www.metaweather.com/api/location/${woeid}`
            )
            .then((response) => {
              commit("SET_WEATHER", response.data);
            });
        });
    },
    SearchLocations({ commit }, name) {
      axios
        .get(
          `https://www.metaweather.com/api/location/search/?query=${name.replace(
            /\s/g,
            "%20"
          )}`
        )
        .then((response) => {
          commit("SET_LOCATION", response.data);
        });
    },
  },
});
