<template>
  <div id="daysInfo">
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.consolidated_weather[1].weather_state_name.replace(
                / /g,
                ''
              ) +
              '.png')
          "
          :alt="Weather.consolidated_weather[1].weather_state_name"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp"
          >{{ parseInt(Weather.consolidated_weather[1].max_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
        <span class="min-temp"
          >{{ parseInt(Weather.consolidated_weather[1].min_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.consolidated_weather[2].applicable_date).format(
          "ddd, DD MMM"
        )
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.consolidated_weather[2].weather_state_name.replace(
                / /g,
                ''
              ) +
              '.png')
          "
          :alt="Weather.consolidated_weather[2].weather_state_name"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp"
          >{{ parseInt(Weather.consolidated_weather[2].max_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
        <span class="min-temp"
          >{{ parseInt(Weather.consolidated_weather[2].min_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.consolidated_weather[3].applicable_date).format(
          "ddd, DD MMM"
        )
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.consolidated_weather[3].weather_state_name.replace(
                / /g,
                ''
              ) +
              '.png')
          "
          :alt="Weather.consolidated_weather[3].weather_state_name"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp"
          >{{ parseInt(Weather.consolidated_weather[3].max_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
        <span class="min-temp"
          >{{ parseInt(Weather.consolidated_weather[3].min_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.consolidated_weather[4].applicable_date).format(
          "ddd, DD MMM"
        )
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.consolidated_weather[4].weather_state_name.replace(
                / /g,
                ''
              ) +
              '.png')
          "
          :alt="Weather.consolidated_weather[4].weather_state_name"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp"
          >{{ parseInt(Weather.consolidated_weather[4].max_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
        <span class="min-temp"
          >{{ parseInt(Weather.consolidated_weather[4].min_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">{{
        moment(Weather.consolidated_weather[5].applicable_date).format(
          "ddd, DD MMM"
        )
      }}</span>
      <div class="day-weather-sign">
        <img
          :src="
            require('@/assets/img/' +
              Weather.consolidated_weather[5].weather_state_name.replace(
                / /g,
                ''
              ) +
              '.png')
          "
          :alt="Weather.consolidated_weather[5].weather_state_name"
        />
      </div>
      <div class="day-temp">
        <span class="max-temp"
          >{{ parseInt(Weather.consolidated_weather[5].max_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
        <span class="min-temp"
          >{{ parseInt(Weather.consolidated_weather[5].min_temp)
          }}<span class="degree" v-if="DegreeCelsius">°C</span
          ><span class="degree" v-else>°F</span></span
        >
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
  grid-template-rows: 177px 177px 177px;
  grid-gap: 25.25px 25.25px;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 120px);
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