<template>
  <div id="container">
    <div class="container-left-side">
      <Weather />
    </div>
    <div class="container-right-side">
      <div class="weather-additional-info">
        <div class="change-temp-buttons">
          <button id="celsius" class="active">°C</button>
          <button id="fahrenheit">°F</button>
        </div>
        <DaysInfo />
        <h4 class="hightlights-title">Today's Hightlights</h4>
        <Hightlights />
        <p class="copyright">
          created by <a href="https://github.com/colaboy99">Colaboy99</a> -
          devChallenges.io
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "@/components/Weather";
import Hightlights from "@/components/Hightlights";
import DaysInfo from "@/components/DaysInfo";


export default {
  name: "App",
  components: {
    Weather,
    Hightlights,
    DaysInfo
  },
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
      padding: 50px 0 25px 0;
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

          &.active {
            color: $primary;
            background-color: $text-light-primary;
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
        overflow: initial;
        align-items: normal;
        justify-content: space-between;
      }
    }
  }
}
</style>
