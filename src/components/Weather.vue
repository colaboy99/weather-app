<template>
  <div id="weather">
    <div class="search-bar">
      <button class="search-button" @click="OpenSearch">
        Seach for places
      </button>
      <button class="location-button">
        <span class="material-icons-round"> my_location </span>
      </button>
      <div :class="[{ opened: isOpen }, 'search-location-list']">
        <span class="material-icons-round close-window" @click="OpenSearch">
          close
        </span>
        <div class="search-input">
          <input type="text" placeholder="search location" />
          <button class="serach-location">Search</button>
        </div>
        <ul class="location-list">
          <li class="location-item">
            <span class="location-name">London</span
            ><span class="material-icons-round"> chevron_right </span>
          </li>
          <li class="location-item">
            <span class="location-name">Barcelona</span
            ><span class="material-icons-round"> chevron_right </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="weather-type">
      <img
        :src="
          require('@/assets/img/' +
            Weather.consolidated_weather[0].weather_state_name.replace(
              / /g,
              ''
            ) +
            '.png')
        "
        alt="Shower"
      />
    </div>
    <h2 class="weather-temp">
      {{ parseInt(Weather.consolidated_weather[0].the_temp)
      }}<span class="degree">°C</span>
    </h2>
    <h4 class="weather-name">
      {{ Weather.consolidated_weather[0].weather_state_name }}
    </h4>
    <div class="weather-date-location">
      <p class="weather-date">
        <span>Today</span> ·
        <span>
          {{
            moment(Weather.consolidated_weather[0].applicable_date).format(
              "ddd , DD MMM"
            )
          }}</span
        >
      </p>
      <p class="weather-location">
        <span class="material-icons-round"> location_on </span>
        <span>{{ Weather.title }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Weather",
  props: {
    Weather: Object,
  },
  created() {
    this.moment = moment;
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
    OpenSearch: function () {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
#weather {
  width: 100%;
  height: 100vh;
  max-width: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  position: relative;

  .search-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: normal;
    padding: 0 46px;

    .search-button {
      height: 40px;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      padding: 10px 18px;
      color: $text-light-primary;
      background-color: #6e707a;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    .location-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 20px;
      font-size: 22px;
      color: $text-light-primary;
      background-color: #6e707a;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    .search-location-list {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      padding: 20px 46px;
      background-color: $secondary;
      z-index: 10;

      &.opened {
        display: block;
      }

      .close-window {
        width: 100%;
        font-size: 18px;
        color: $text-light-primary;
        text-align: right;
        margin-bottom: 45px;
        cursor: pointer;
      }

      .search-input {
        display: flex;
        justify-content: space-between;
        column-gap: 6px;
        width: 100%;
        height: 48px;
        position: relative;

        &::before {
          font-family: "Material Icons Round";
          content: "search";
          position: absolute;
          top: 15px;
          left: 18px;
          font-size: 20px;
          color: #616475;
        }

        input {
          width: 100%;
          max-width: 268px;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          color: #616475;
          padding-left: 50px;
          padding-right: 10px;
          border: 1px solid $text-light-primary;
          background-color: $secondary;

          &:focus {
            outline: none;
          }
        }

        .serach-location {
          font-size: 16px;
          font-weight: 600;
          line-height: 19px;
          color: $text-light-primary;
          background-color: #3c47e9;
          border: none;
          padding: 0 15px;
          cursor: pointer;
        }
      }

      .location-list {
        width: 100%;
        height: 100%;
        list-style: none;
        margin: 60px 0 0 0;
        padding: 0;

        .location-item {
          box-sizing: border-box;
          height: 64px;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          color: $text-light-primary;
          padding: 22px 12px;
          border: 1px solid transparent;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          cursor: pointer;

          span[class*="icons"] {
            display: none;
            color: #616475;
          }

          &:hover {
            border: 1px solid #616475;

            span[class*="icons"] {
              display: block;
            }
          }
        }
      }
    }
  }

  .weather-type {
    width: 100%;
    height: 326px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
      content: " ";
      background-image: url("../assets/img/Cloud-background.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transform: scale(1.4);
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.05;
    }

    img {
      height: 174px;
    }
  }

  .weather-temp {
    font-size: 144px;
    font-weight: 500;
    line-height: 169px;
    color: $text-light-primary;
    vertical-align: text-top;

    .degree {
      font-size: 48px;
      font-weight: 500;
      line-height: 56px;
      color: $text-light-secondary;
    }
  }

  .weather-name {
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;
    color: $text-light-secondary;
  }

  .weather-date-location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 32px;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    color: $text-dark-primary;

    .weather-location {
      display: flex;
      justify-content: center;
      column-gap: 8px;
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 460px;
    height: 100vh;

    .weather-type {
      height: 375px;

      img {
        height: 234px;
      }
    }
  }
}
</style>