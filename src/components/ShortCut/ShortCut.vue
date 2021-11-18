<template>
  <div class="short_cut_box" ref="shortCutBox">
    <div class="quick_icon">
      <ul>
        <li>
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>消息</span>
        </li>
        <li>
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>代办</span>
        </li>
        <li>
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>聊天</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.short_cut_box {
  position: fixed;
  top: calc(50% - 36px);
  right: 0;
}
.quick_icon {
  display: flex;
  flex-direction: column;
  ul li {
    position: relative;
    right: -35px;
    transition: right 1s;
    width: 40px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:hover {
      right: 0px;
    }
  }
}
i {
  font-size: 28px;
}
</style>