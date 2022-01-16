<template>
  <div class="home">
    <div class="header_title">
      <div class="show">
        <h1> G2展示盘表 </h1>
      </div>
      <div class="line"></div>
    </div>
    <div class="content_chart">
      <div class="left_box pseudo">
        <div class="box_title">
          <span>人员人事指标</span>
        </div>
        <el-scrollbar height="calc(100vh - 308px)">
          <div class="chart_box">
            <div v-for="(value,key) in allData.staff" :key="key" class="chart_item">
              <div class="title">
                <h3>{{ value.title }}</h3>
                <h3>{{ value.units }}</h3>
              </div>
              <div :id="`${key}`"></div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="content_box pseudo">
        <div class="box_title">
          <span>人员人事指标</span>
        </div>
        <el-scrollbar height="calc(100vh - 308px)">
          <div class="attendce">
            <div class="table">
              <div class="title">
                <h3>考勤指标</h3>
              </div>
              <el-table :data="allData.attendance">
                <el-table-column prop="name"></el-table-column>
                <el-table-column label="考勤人数" prop="staff"></el-table-column>
                <el-table-column label="迟到/次" prop="late"></el-table-column>
                <el-table-column label="缺卡/次" prop="lack"></el-table-column>
                <el-table-column label="请假/时" prop="vacation"></el-table-column>
                <el-table-column label="出差/时" prop="travel"></el-table-column>
                <el-table-column label="旷工/时" prop="absent"></el-table-column>
                <el-table-column label="满勤人数" prop="full_num"></el-table-column>
                <el-table-column label="满勤率/%" prop="full_rate"></el-table-column>
              </el-table>
            </div>
            <div class="time_chart">
              <div id="overtime"></div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="right_box pseudo">
        <div class="box_title">
          <span>人员人事指标</span>
        </div>
        <el-scrollbar height="calc(100vh - 308px)">
          <div class="other_table">
            <div class="table">
              <div class="title">
                <h3>考勤指标</h3>
              </div>
              <el-table :data="allData.examine">
                <el-table-column prop="name"></el-table-column>
                <el-table-column label="平均审批时长" prop="long"></el-table-column>
                <el-table-column label="未审批数量" prop="num"></el-table-column>
              </el-table>
            </div>
          </div>
        </el-scrollbar>
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
  background: #021a40;
  height: calc(100vh - 110px);
  overflow: hidden;
}
.header_title {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 60px;
  h1 {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    color: #f8f8f8;
    text-align: center;
    width: 590px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    box-shadow: inset 0 0 0 1px rgba(230, 116, 9, 0.5);
  }
}

.content_chart {
  display: flex;
  height: calc(100vh - 245px);
  .left_box {
    width: 25%;
    margin: 0 20px 20px 20px;
  }
  .content_box {
    width: 50%;
    margin: 0 0 20px 0;
  }
  .right_box {
    width: 20%;
    margin: 0 20px 20px 20px;
    .other_table {
      background: rgb(47, 110, 247, 0.1);
    }
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
.box_title {
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 7px;
  span {
    display: inline-block;
    padding: 2px;
    color: #237dbf;
    border: 1px solid #237dbf;
  }
}
.chart_box {
  padding: 20px;
  background: rgb(47, 110, 247, 0.1);
  overflow: hidden;
  .chart_item {
    margin-bottom: 20px;
  }
  .chart_item:last-child {
    margin: 0;
  }
}
.attendce {
  padding: 20px;
  background: rgb(47, 110, 247, 0.1);
}
.table {
  margin-bottom: 40px;
}
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h3 {
    color: red;
  }
}
</style>