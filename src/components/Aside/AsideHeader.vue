<template>
  <div class="aside_header">
    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="userImg">
        <img class="imgUrl" :src="require('@/assets/images/Logo.png')" alt="" />
        <div class="imgZ" @click="showHeadUpload">修改头像</div>
        <!-- <HeadUpload class="uploadImg" v-model="dialogVisible" /> -->
      </div>
      <div class="editarea">
        <div class="userTxt">
          <p>看，灰机~</p>
          <p>888888880</p>
          <p>技术部</p>
        </div>
        <div class="zankai_img">
          <img style="width:14px;height:14px;margin-top:20px" src="@/assets/images/zankai.png" alt="">
        </div>
        <!-- 修改用户信息 -->
        <div class="user_do">
          <Popup />
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Popup from "./compontent/Popup.vue";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
} from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Popup,
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    const store = useStore();
    console.log(store);

    const showHeadUpload = () => {
      console.log(123);
    };
    let self_message = reactive({});

    self_message = computed(() => {
      console.log("我先运行了");
      return usVuex.useState("homeMoudle", "self_message");
    });
    console.log(self_message);

    onMounted(() => {
      usVuex.useActions("homeMoudle", "GET_USER_INFO");
      // usVuex.useActions("homeMoudle", "GET_WORK_TODO");
    });
    return {
      self_message,
      showHeadUpload,
    };
  },
});
</script>

<style scoped lang="scss">
.userInfo {
  display: flex;
  justify-content: space-around;
  margin: 40px 0px 35px 20px;
  .userImg {
    .imgUrl {
      position: relative;
      width: 70px;
      height: 70px;
      border-radius: 20px;
      border: 1px solid #ccc;
      margin-right: 14px;
    }
    .imgZ {
      position: absolute;
      top: 40px;
      width: 70px;
      height: 70px;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0);
      text-align: center;
      line-height: 70px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0);
    }
    .imgZ:hover {
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      cursor: pointer;
    }
  }
  .userTxt {
    flex: 1;
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      margin: 0;
    }
    p:nth-child(1) {
      font-size: 20px;
    }
    p:nth-child(2),
    p:nth-child(3) {
      font-size: 14px;
      color: #969699;
    }
  }
}
.editarea {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  flex: 1;
  cursor: pointer;
  &:hover .user_do {
    display: block;
  }
}
.user_do {
  display: none;
  position: fixed;
  top: 35px;
  left: 270px;
  z-index: 999;
}
</style>