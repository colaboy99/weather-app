<template>
  <div id="hightlights">
    <!-- WIND -->
    <div class="hightlights-item">
      <h4 class="hightlight-title">Wind status</h4>
      <span class="hightlight-value"
        >{{ parseInt(Weather.consolidated_weather[0].wind_speed)
        }}<span class="hightlight-sign"> mph</span>
      </span>
      <div class="wind-direction">
        <div class="wind-icon">
          <span
            class="material-icons-round"
            :style="{
              transform:
                'rotate(' +
                parseInt(Weather.consolidated_weather[0].wind_direction) +
                'deg)',
            }"
          >
            navigation
          </span>
        </div>
        <div class="wind-point">
          {{ Weather.consolidated_weather[0].wind_direction_compass }}
        </div>
      </div>
    </div>
    <!-- HUMIDITY -->
    <div class="hightlights-item">
      <h4 class="hightlight-title">Humidity</h4>
      <span class="hightlight-value"
        >{{ Weather.consolidated_weather[0].humidity }}
        <span class="hightlight-sign"> %</span>
      </span>
      <div class="humidity-bar">
        <div
          id="process"
          :style="{ width: Weather.consolidated_weather[0].humidity + '%' }"
        ></div>
        <div class="process-values">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div class="process-sign">%</div>
      </div>
    </div>
    <!-- VISIBILITY -->
    <div class="hightlights-item">
      <h4 class="hightlight-title">Visibility</h4>
      <span class="hightlight-value"
        >{{ parseFloat(Weather.consolidated_weather[0].visibility.toFixed(1)) }}
        <span class="hightlight-sign"> miles</span>
      </span>
    </div>
    <!-- AIR PRESSURE -->
    <div class="hightlights-item">
      <h4 class="hightlight-title">Air Pressure</h4>
      <span class="hightlight-value"
        >{{ parseInt(Weather.consolidated_weather[0].air_pressure) }}
        <span class="hightlight-sign"> mb</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hightlights",
  props: {
    Weather: Object,
  },
};
</script>

<style lang="scss" scoped>
#hightlights {
  display: grid;
  grid-template-columns: repeat(1, 328px);
  grid-template-rows: 204px 204px 159px 159px;
  grid-gap: 45px 45px;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 328px);
    grid-template-rows: 204px 159px;
    grid-gap: 45px 45px;
  }
  .hightlights-item {
    background-color: $secondary;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: $text-light-primary;
    padding: 20px 0;

    .hightlight-title {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
    }

    .hightlight-value {
      font-size: 64px;
      font-weight: 700;
      line-height: 75px;

      .hightlight-sign {
        font-size: 36px;
        font-weight: 500;
        line-height: 42px;
      }
    }

    .wind-direction {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0 5px;
      .wind-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.3);
        color: $text-light-primary;
        border-radius: 15px;

        span {
          font-size: 16px;
          line-height: 16px;
          transform: rotate(0deg);
        }
      }

      .wind-point {
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
      }
    }

    .humidity-bar {
      position: relative;
      width: 229px;
      height: 8px;
      background-color: $text-light-primary;
      border-radius: 80px;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      color: $text-light-secondary;

      #process {
        width: 0%;
        height: 8px;
        background-color: #ffec65;
        border-radius: 80px;
      }

      .process-values {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: -15px;
      }

      .process-sign {
        position: absolute;
        top: 10px;
        right: 0;
      }
    }
  }
}
</style>