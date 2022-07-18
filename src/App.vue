<template>
  <div id="container" v-if="this.$store.state.dataStatus">
    <div class="container-left-side">
      <Weather :Weather="AllWeather" />
    </div>
    <div class="container-right-side">
      <div class="weather-additional-info">
        <div class="change-temp-buttons">
          <button
            id="celsius"
            :class="{ active: DegreeCelsius }"
            @click="ChangeDegree"
          >
            °C
          </button>
          <button
            id="fahrenheit"
            :class="{ active: !DegreeCelsius }"
            @click="ChangeDegree"
          >
            °F
          </button>
        </div>
        <DaysInfo :Weather="AllWeather" />
        <h4 class="hightlights-title">Today's Hightlights</h4>
        <Hightlights :Weather="AllWeather" />
        <p class="copyright">
          created by <a href="https://github.com/colaboy99">Colaboy99</a> -
          devChallenges.io
        </p>
      </div>
    </div>
  </div>
  <div id="loading" v-else>
    <div class="loader">
      <div class="face face1">
        <div class="circle"></div>
      </div>
      <div class="face face2">
        <div class="circle"></div>
      </div>
    </div>
    <span class="material-icons loading-center"> cloud </span>
  </div>
</template>

<script>
import Weather from "@/components/Weather";
import Hightlights from "@/components/Hightlights";
import DaysInfo from "@/components/DaysInfo";
import { mapState } from "vuex";
import store from "@/store/index.js";

export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {
    Weather,
    Hightlights,
    DaysInfo,
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          //position.coords.latitude + position.coords.longitude
          let positions = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          store.dispatch("SearchPosition", positions);
        },
        function (error) {
          if (error.code == 1) {
            store.dispatch("WeatherDefault");
          }
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },
  mounted() {},
  methods: {
    ChangeDegree: function () {
      store.commit("ChangeDegree");
    },
  },
  computed: mapState(["AllWeather", "DegreeCelsius"]),
};
</script>

<style lang="scss">
#container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;

  .container-left-side {
    width: 100%;
    height: 100%;
    background-color: $secondary;
    overflow: hidden;
  }

  .container-right-side {
    width: 100%;
    background-color: $primary;
    overflow: hidden;

    .weather-additional-info {
      width: max-content;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      row-gap: 50px;
      margin: 0 auto;
      padding: 30px 0 25px 0;
      overflow: initial;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .change-temp-buttons {
        display: none;

        button {
          width: 40px;
          height: 40px;
          font-size: 18px;
          font-weight: 700;
          line-height: 21px;
          color: $text-light-primary;
          background-color: $text-dark-secondary;
          border: none;
          border-radius: 20px;
          cursor: pointer;

          &.active {
            color: $primary;
            background-color: $text-light-primary;
            pointer-events: none;
          }
        }
      }

      .hightlights-title {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: $text-light-primary;
        align-self: flex-start;
      }

      .copyright {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        color: $text-light-secondary;
        text-align: center;

        a {
          color: $text-light-secondary;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .container-left-side {
      height: 100vh;
      max-width: 460px;
    }

    .container-right-side {
      height: 100vh;
      .weather-additional-info {
        justify-content: normal;
        overflow: scroll;

        .change-temp-buttons {
          display: flex;
          justify-content: flex-end;
          align-self: flex-end;
          column-gap: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .container-right-side {
      .weather-additional-info {
        align-items: normal;
        justify-content: space-between;
      }
    }
  }
}

#loading {
  margin: 0;
  padding: 0;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  position: relative;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    box-sizing: border-box;

    .face {
      position: absolute;
      border: 2px solid $secondary;

      &.face1 {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 10px rgba(30, 33, 58, 1);
        border-radius: 50%;
        border-left: 2px solid #ffec65;
        border-top: 2px solid #ffec65;
        animation: animate-rotate 3s linear infinite;

        .circle {
          transform: rotate(-45deg);

          &::before {
            background-color: #ffec65;
            box-shadow: 0 0 20px #ffec65, 0 0 40px #ffec65, 0 0 60px #ffec65,
              0 0 80px #ffec65, 0 0 100px #ffec65,
              0 0 0 5px rgba(255, 236, 101, 0.1);
          }
        }
      }

      &.face2 {
        top: 30px;
        left: 30px;
        right: 30px;
        bottom: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 1);
        border-radius: 50%;
        border-right: 2px solid #ade8ff;
        border-bottom: 2px solid #ade8ff;
        animation: animate-rotate 3s linear reverse infinite;

        .circle {
          transform: rotate(-45deg);

          &::before {
            background-color: #ade8ff;
            box-shadow: 0 0 20px #ade8ff, 0 0 40px #ade8ff, 0 0 60px #ade8ff,
              0 0 80px #ade8ff, 0 0 100px #ade8ff,
              0 0 0 5px rgba(173, 232, 255, 0.1);
          }
        }
      }

      .circle {
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        width: 50%;
        height: 2px;
        transform-origin: left;

        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff;
          top: -4px;
          right: -6px;
        }
      }
    }
  }

  .loading-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: #fff;
  }
}
</style>
