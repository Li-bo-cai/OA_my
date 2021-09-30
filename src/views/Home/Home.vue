<template>
  <div>
    <div class="header">
      <p>渝万传媒OA云办公系统 V1.0</p>
      <p class="header_name"><span>今天是我们相伴的第 {{ so_time }} 天，感谢我们共同成长。</span></p>
    </div>

    <div class="content_used">
      <p class="content_used_tit">常用功能</p>
      <div style="display:flex">
        <div class="content_used_fist">
          <div class="function1" @click="go_attendance">
            <img src="../../assets/images/kaoqing@2x.png" alt="" />
          </div>
          <p>我的考勤</p>
        </div>
        <div class="content_used_fist">
          <div class="function2" @click="leave_application">
            <img src="../../assets/images/qingjia@2x.png" alt="" />
          </div>
          <p>请假申请</p>
        </div>
        <!-- <div class="content_used_fist">
          <div class="function2" @click="leave_application">
            <img src="../../../assets/images/baoxiao@2x.png" alt="" />
          </div>
          <p>报销管理</p>
        </div> -->
      </div>
    </div>

    <div class="content_used_work">
      <div class="content_used_dispose">
        <p class="tit" @click="get_pending_work">待处理工作
          <span v-if="stayHandle_count!==0" class="circular" @click="get_pending_work">{{ stayHandle_count }}</span>
        </p>
        <p v-if="showVive2_1" style="color: #999">暂无待处理工作</p>
        <div class="dispose" v-for="item in stayHandle" :key="item.id">
          <div class="dispose1">
            <p>{{ item.message }}</p>
            <p>{{ item.created_at}}</p>
          </div>
          <div class="dispose2">
            <div @click="go_handle(item)">去处理 ></div>
          </div>
        </div>
        <div v-if="showVive2" class="more more_work" @click="get_pending_work">···</div>
      </div>
      <div class="content_used_announcement">
        <p class="tit">企业公告</p>
        <p v-if="showVive3_1" style="color: #999">暂无企业公告</p>
        <div class="announcement" v-for="item in notice" :key="item.id">
          <div class="announcement1">
            <p>{{ item.title }}</p>
            <p>{{ item.release_time}}</p>
          </div>
          <div class="announcement2">
            <div @click="go_notice(item)"> ></div>
          </div>
        </div>
        <div v-if="showVive3" class="more more_work" @click="go_notice_page">···</div>
      </div>
    </div>

    <div class="content_job">
      <p class="tit">文件资源中心</p>
      <p v-if="showVive4_1" style="color: #999">暂无入职必读</p>

      <div class="job" v-for="item in document" :key="item.id">
        <div class="icon" @click="go_document(item)">
          <img src="../../assets/images/world@2x.png" alt="" />
        </div>
        <div class="text" @click="go_document(item)">
          <p>{{ item.file_name }}</p>
          <p>{{ item.file_name }}</p>
        </div>
      </div>

      <div v-if="showVive4" class="more" @click="go_document_page">···</div>
    </div>

    <div class="content_dynamic">
      <p class="tit">集团动态</p>
      <p v-if="showVive5_1" style="color: #999">暂无集团动态</p>

      <div class="dynamic" v-for="item in dynamic" :key="item.id">
        <div class="icon" @click="go_dynamic_page(item)">
          <img :src="item.title_picture" alt="" />
        </div>
        <div class="text" @click="go_dynamic_page(item)">
          <p>{{ item.title[0] }}</p>
          <p>{{ item.release_time}}</p>
          <p v-html="item.content"> </p>
        </div>
      </div>

    </div>
    <div v-if="showVive5" class="more" @click="go_dynamic">···</div>
  </div>
</template>

<script lang="ts">
import homefunc from "./Home";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  setup() {
    let dialogVisible = ref<boolean>(false);
    let showVive = ref<boolean>(false);
    let showVive2 = ref<boolean>(false);
    let showVive2_1 = ref<boolean>(false);
    let showVive3 = ref<boolean>(false);
    let showVive3_1 = ref<boolean>(false);
    let showVive4 = ref<boolean>(false);
    let showVive4_1 = ref<boolean>(false);
    let showVive5 = ref<boolean>(false);
    let showVive5_1 = ref<boolean>(false);
    return {
      homefunc,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  p:nth-of-type(1) {
    color: #969699;
    font-size: 18px;
    margin-bottom: 50px;
  }
  .header_name {
    margin-bottom: 50px;
    span {
      font-size: 24px;
      font-weight: 400;
    }
  }
}
.content_used {
  margin-bottom: 50px;
  .content_used_tit {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
  }
  .content_used_fist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 70px;
    cursor: pointer;
    img {
      width: 72px;
      height: 72px;
    }
    .function1 {
      border-radius: 30px;
      margin-bottom: 18px;
      &:hover {
        transform: translateY(-6px);
      }
    }
    .function2 {
      border-radius: 30px;
      margin-bottom: 18px;
      &:hover {
        transform: translateY(-6px);
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
  }
}

.content_used_work {
  margin-bottom: 55px;
  width: 100%;
  display: flex;
  .content_used_dispose {
    flex: 1;
    .tit {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
      cursor: pointer;
    }
    .circular {
      display: inline-block;
      width: 34px;
      height: 20px;
      color: #fff;
      font-size: 14px;
      border-radius: 10px;
      background: #f64267;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
    }

    .dispose {
      display: flex;
      justify-content: space-between;
      .dispose1 {
        width: 400px;
        p:nth-child(1) {
          width: 270px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-child(2) {
          font-size: 14px;
          font-weight: 400;
          color: #969699;
        }
      }
      .dispose2 {
        margin-right: 50px;
        div {
          font-weight: 400;
          color: #5777e7;
          cursor: pointer;
        }
      }
    }
  }

  .content_used_announcement {
    position: relative;
    flex: 1;
    .tit {
      font-size: 20px;
      font-weight: 600;
    }
    .announcement {
      width: 580px;
      display: flex;
      justify-content: space-between;

      .announcement1 {
        p:nth-child(1) {
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-child(2) {
          font-size: 14px;
          font-weight: 400;
          color: #969699;
        }
      }
      .announcement2 {
        margin-right: 50px;
        div {
          margin-top: 13px;
          color: #5777e7;
          cursor: pointer;
        }
      }
    }
  }
}

.more {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  cursor: pointer;
}

.content_job {
  margin-bottom: 55px;
  .tit {
    height: 52px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .job {
    width: 20%;
    float: left;
    display: flex;
    margin-right: 40px;
    .icon {
      margin-right: 16px;
      img {
        width: 48px;
        height: 52px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p:nth-child(1) {
        width: 100px;
        font-weight: 600;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-child(2) {
        width: 160px;
        font-weight: bold;
        color: #969699;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.content_dynamic {
  .tit {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .dynamic {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    margin-right: 30px;
    .icon {
      cursor: pointer;
      margin-right: 20px;
      img {
        width: 72px;
        height: 72px;
        border-radius: 20px;
      }
    }
    .text {
      cursor: pointer;
      width: 70%;
      p:nth-child(1) {
        margin: 8px 0 6px 0;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p:nth-child(2) {
        margin: 8px 0 6px 0;
        font-size: 14px;
        font-weight: 400;
        color: #969699;
      }

      p:nth-child(3) {
        margin: 8px 0 6px 0;
        font-size: 14px;
        font-weight: 400;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>