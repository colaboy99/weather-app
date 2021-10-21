<template>
  <div id="daysInfo">
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img src="@/assets/img/Sleet.png" alt="Clear" />
      </div>
      <div class="day-temp">
        <span class="max-temp">16°C</span>
        <span class="min-temp">11°C</span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img src="@/assets/img/Sleet.png" alt="Clear" />
      </div>
      <div class="day-temp">
        <span class="max-temp">16°C</span>
        <span class="min-temp">11°C</span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img src="@/assets/img/Thunderstorm.png" alt="Clear" />
      </div>
      <div class="day-temp">
        <span class="max-temp">16°C</span>
        <span class="min-temp">11°C</span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img src="@/assets/img/LightCloud.png" alt="Clear" />
      </div>
      <div class="day-temp">
        <span class="max-temp">16°C</span>
        <span class="min-temp">11°C</span>
      </div>
    </div>
    <div class="day-item">
      <span class="day-date">Tomorrow</span>
      <div class="day-weather-sign">
        <img src="@/assets/img/HeavyRain.png" alt="Clear" />
      </div>
      <div class="day-temp">
        <span class="max-temp">16°C</span>
        <span class="min-temp">11°C</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaysInfo",
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
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    background-color: $secondary;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: $text-light-primary;

    .day-weather-sign {
      max-width: 70px;
      max-height: 70px;

      img {
        height: 100%;
      }
    }

    .day-temp {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .min-temp {
        color: $text-light-secondary;
      }
    }
  }
}
</style>