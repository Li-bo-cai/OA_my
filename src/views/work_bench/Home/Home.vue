<template>
  <div class="home">
    <!-- <div id="gender" ref="gender"></div>
    <div id="state" ref="state"></div>
    <div id="education" ref="education"></div>
    <div id="age" ref="age"></div>
    <div id="end_work_num" ref="end_work_num"></div>
    <div id="end_work_rate" ref="end_work_rate"></div>
    <div id="area" ref="area"></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hmoeFunc from "./Home";
export default defineComponent({
  setup() {
    return {
      ...hmoeFunc(),
    };
  },
});
</script>

<style scoped lang="scss">
.home {
  background: #000;
  div {
    margin-bottom: 20px;
  }
  div:last-child{
    margin: 0;
  }
}
#gender {
  width: 500px;
  height: 200px;
}
#state {
  width: 500px;
  height: 200px;
}
#education {
  width: 500px;
  height: 200px;
}
#age {
  width: 500px;
  height: 200px;
}
#end_work_num {
  width: 500px;
  height: 200px;
}
</style>