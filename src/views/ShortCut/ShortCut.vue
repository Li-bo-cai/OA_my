<template>
  <div class="short_cut_box" ref="shortCutBox">
    <div class="quick_icon">
      <ul>
        <li @dblclick="showMessageCard" @click="recover('msg')">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>消息</span>
        </li>
        <li @dblclick="showPendingCard" @click="recover('pend')">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>代办</span>
        </li>
        <li @dblclick="showChatCard" @click="recover('chat')">
          <i class="iconfont icon-tubiao_renshiguanli"></i>
          <span>聊天</span>
        </li>
      </ul>
    </div>
    <Message v-show="MessagedialogVisible" ref="msg" />
    <Pending ref="pend" />
    <Chat ref="chat" />
  </div>
</template>

<script lang="ts">
import Message from "./compontents/Message.vue";
import Pending from "./compontents/Pending.vue";
import Chat from "./compontents/Chat.vue";
import { defineComponent, ref, inject } from "vue";
import { mapState } from "vuex";

type MessageType = InstanceType<typeof Message>;
type PendingType = InstanceType<typeof Pending>;
type ChatType = InstanceType<typeof Chat>;
export default defineComponent({
  components: {
    Message,
    Pending,
    Chat,
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

    const msg = ref<MessageType | null>(null);
    const pend = ref<PendingType | null>(null);
    const chat = ref<ChatType | null>(null);

    const showMessageCard = () => {
      usVuex.useMutations("shortCutModule", "SET_MESSAGE_DIALOG", true);
    };
    const showPendingCard = () => {
      console.log("我是展示弹窗");
    };
    const showChatCard = () => {
      console.log("我是展示弹窗");
    };
    const recover = (val: string) => {
      if (val == "msg") {
        (msg.value as MessageType).$el.style.left =
          document.body.clientWidth - 650 + "px";
        (msg.value as MessageType).$el.style.top =
          document.body.clientHeight - 450 + "px";
      }
      if (val == "pend") {
        (pend.value as MessageType).$el.style.left =
          document.body.clientWidth - 650 + "px";
        (pend.value as MessageType).$el.style.top =
          document.body.clientHeight - 450 + "px";
      }
      if (val == "chat") {
        (chat.value as MessageType).$el.style.left =
          document.body.clientWidth - 650 + "px";
        (chat.value as MessageType).$el.style.top =
          document.body.clientHeight - 450 + "px";
      }
    };

    
    return {
      msg,
      pend,
      chat,
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
    right: -40px;
    z-index: 999;
    transition: right 0.8s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:hover {
      right: 0px;
      background: rgb(102, 186, 255);
      color: #fff;
    }
  }
}
i {
  font-size: 22px;
}
</style>