<template>
  <div class="home">
    <div class="header_title">
      <div class="show">
        <h1> G2展示盘表 </h1>
      </div>
    </div>

    <div class="content_chart">
      <el-scrollbar class="left_box">
        <div class="chart_box">
        </div>
      </el-scrollbar>
      <div class="content_box">
      </div>
      <div class="right_box">
      </div>
    </div>

    <div class="time_clock">
      <div>{{date}}</div>
      <div>{{time}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import hmoeFunc from "./Home";
export default defineComponent({
  setup() {
    const time = ref<string>("");
    const date = ref<string>("");
    const timer = ref<any>(null);
    const getTime = () => {
      timer.value = setInterval(() => {
        date.value = moment().format("yyyy年M月D日");
        time.value = moment().format("HH:mm:ss");
      }, 1000);
    };

    onMounted(() => {
      getTime();
    });

    onBeforeUnmount(() => {
      timer.value = null;
    });

    return {
      ...hmoeFunc(),
      date,
      time,
    };
  },
});
</script>

<style scoped lang="scss">
@import "./animation.scss";
.home {
  position: relative;
  background: #000;
  height: calc(100vh - 110px);
  overflow: hidden;
}
.header_title {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 60px;
  .show {
    position: relative;
    overflow: hidden;
  }
  h1 {
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 1;
    color: #f8f8f8;
    // background: #000;
    text-align: center;
    width: 598px;
    height: 58px;
    line-height: 58px;
    margin: 0 auto;
  }
}

.content_chart {
  display: flex;
  height: calc(100vh - 240px);
  .left_box {
    width: 25%;
    .chart_box {
      padding: 20px;
      // padding-bottom: 20px;
    }
  }
  .content_box {
    flex: 1;
  }
  .right_box {
    width: 15%;
  }
}
.time_clock {
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 999;
  div {
    color: #fff;
    margin-bottom: 5px;
    font-weight: bold;
  }
}
.chart {
  margin-bottom: 20px;
}
</style>