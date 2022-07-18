<template>
  <div id="daysInfo">
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.forecast.forecastday[0].date).format("ddd, DD MMM")
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.current.condition.text.replace(/ /g, '') +
              '.png')
          "
          :alt="Weather.forecast.forecastday[0].text"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[0].day.maxtemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="max-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[0].day.maxtemp_f) }}
          <span class="degree">°F</span>
        </span>

        <span class="min-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[0].day.mintemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="min-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[0].day.mintemp_f) }}
          <span class="degree">°F</span>
        </span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.forecast.forecastday[1].date).format("ddd, DD MMM")
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.current.condition.text.replace(/ /g, '') +
              '.png')
          "
          :alt="Weather.forecast.forecastday[1].text"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[1].day.maxtemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="max-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[1].day.maxtemp_f) }}
          <span class="degree">°F</span>
        </span>

        <span class="min-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[1].day.mintemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="min-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[1].day.mintemp_f) }}
          <span class="degree">°F</span>
        </span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.forecast.forecastday[2].date).format("ddd, DD MMM")
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.current.condition.text.replace(/ /g, '') +
              '.png')
          "
          :alt="Weather.forecast.forecastday[2].text"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[2].day.maxtemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="max-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[2].day.maxtemp_f) }}
          <span class="degree">°F</span>
        </span>

        <span class="min-temp" v-if="DegreeCelsius">
          {{ parseInt(Weather.forecast.forecastday[2].day.mintemp_c) }}
          <span class="degree">°C</span>
        </span>
        <span class="min-temp" v-else>
          {{ parseInt(Weather.forecast.forecastday[2].day.mintemp_f) }}
          <span class="degree">°F</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "DaysInfo",
  props: {
    Weather: Object,
  },
  created() {
    this.moment = moment;
  },
  computed: mapState(["DegreeCelsius"]),
};
</script>

<style lang="scss" scoped>
#daysInfo {
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-template-rows: 177px 177px;
  grid-gap: 25.25px 25.25px;
  justify-content: center;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: 177px;
  }

  .day-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: $secondary;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: $text-light-primary;

    .day-weather-sign {
      max-width: 70px;
      max-height: 70px;

      img {
        width: 70px;
      }
    }

    .day-temp {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      .min-temp {
        color: $text-light-secondary;
      }
    }
  }
}
</style>
