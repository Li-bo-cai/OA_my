<template>
  <div class="short_cut_box" ref="shortCutBox">
    <div class="quick_icon">
      <ul>
        <li @click="showMessageCard" @dblclick="recover">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>消息</span>
        </li>
        <li @click="showPendingCard">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>代办</span>
        </li>
        <li @click="showChatCard">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>聊天</span>
        </li>
      </ul>
    </div>
    <Message v-show="MessagedialogVisible" />
  </div>
</template>

<script lang="ts">
import Message from "./compontents/Message.vue";
import { defineComponent, ref, inject } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  components: {
    Message,
  },
  computed: {
    ...mapState("shortCutModule", [
      "MessagedialogVisible",
      "PendingdialogVisible",
      "ChatdialogVisible",
    ]),
  },
  setup() {
    const usVuex: any = inject("usVuex");

    const showMessageCard = () => {
      // console.log("我是展示弹窗");
      usVuex.useMutations("shortCutModule", "SET_MESSAGE_DIALOG", true);
    };
    const showPendingCard = () => {
      console.log("我是展示弹窗");
    };
    const showChatCard = () => {
      console.log("我是展示弹窗");
    };
    const recover = () => {
      usVuex.useMutations("shortCutModule", "SET_STYLE");
    };
    return {
      showMessageCard,
      showPendingCard,
      showChatCard,
      recover,
    };
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
    z-index: 999;
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
      background: rgb(102, 186, 255);
    }
  }
}
i {
  font-size: 28px;
}
</style>