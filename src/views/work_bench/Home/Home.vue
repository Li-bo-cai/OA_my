<template>
  <div class="home">
    <div class="header">
      <p>渝万传媒OA云办公系统 V1.0</p>
      <p class="header_name"><span>今天是我们相伴的第 {{ myTime }} 天，感谢我们共同成长。</span></p>
    </div>

    <div class="content_used">
      <p class="content_used_tit">常用功能</p>
      <div style="display:flex">
        <div class="content_used_fist">
          <div class="function1" @click="go_attendance">
            <!-- <img src="../../assets/images/kaoqing@2x.png" alt="" /> -->
          </div>
          <p>我的考勤</p>
        </div>
        <div class="content_used_fist">
          <div class="function2" @click="leave_request">
            <!-- <img src="../../assets/images/qingjia@2x.png" alt="" /> -->
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
        <p class="tit">待处理工作
          <span v-if="work_todo.count" class="circular" @click="get_pending_work">{{ work_todo.count }}</span>
        </p>
        <p v-if="!work_todo.count" style="color: #999">暂无待处理工作</p>
        <template v-else>
          <div class="dispose" v-for="item in work_todo" :key="item.id">
            <div class="dispose1">
              <p>{{ item.message }}</p>
              <p>{{ item.created_at}}</p>
            </div>
            <div class="dispose2">
              <p @click="go_handle(item)">去处理 ></p>
            </div>
          </div>
          <div v-if="showVive2" class="more more_work" @click="get_pending_work">···</div>
        </template>
      </div>
      <div class="content_used_announcement">
        <p class="tit">公司公告</p>
        <p v-if="notice&&notice.length==0" style="color: #999">暂无公司公告</p>
        <div class="announcement" v-for="item in notice" :key="item.id">
          <div class="announcement1">
            <p>{{ item.title}}</p>
            <p>{{ item.release_time}}</p>
          </div>
          <div class="announcement2">
            <p @click="go_notice(item)"> ></p>
          </div>
        </div>
        <div v-if="showVive3" class="more more_work" @click="go_notice_page">···</div>
      </div>
    </div>

    <div class="content_job">
      <p class="tit">文件资源中心</p>
      <p v-if="word_file&&word_file.length==0" style="color: #999">暂无入职必读</p>
      <div class="job">
        <div class="job_detail" v-for="item in word_file" :key="item.id" @click="go_document(item)">
          <!-- <img src="../../assets/images/world@2x.png" alt="" /> -->
          <div class="text">
            <p>{{ item.file_name }}</p>
          </div>
        </div>
      </div>
      <div v-if="showVive4" class="more" @click="go_document_page">···</div>
    </div>

    <div class="content_dynamic">
      <p class="tit">集团动态</p>
      <p v-if="dynamic&&dynamic.length==0" style="color: #999">暂无集团动态</p>
      <div class="dynamic">
        <div class="dynamic_detail" v-for="item in dynamic" :key="item.id" @click="go_dynamic(item)">
          <img :src="item.title_picture" alt="" />
          <div class="text">
            <p>{{item.title[0]}}</p>
            <p>{{item.release_time}}</p>
            <p>{{item.title[1]}}</p>
          </div>
        </div>
      </div>

    </div>
    <div v-if="showVive5" class="more" @click="go_dynamic_page">···</div>
  </div>
</template>

<script lang="ts">
import homefunc from "./Home";
import { defineComponent } from "@vue/runtime-core";
import { getCurrentInstance, onMounted } from "vue";
import { mapState } from "vuex";
export default defineComponent({
  computed: {
    ...mapState("homeModule", [
      "myTime",
      "dynamic",
      "notice",
      "word_file",
      "work_todo",
    ]),
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    onMounted(() => {
      console.log("我刷新了");
      usVuex.useActions("homeModule", "GET_USER_INFO");
      usVuex.useActions("homeModule", "GET_WORK_TODO");
    });

    return {
      ...homefunc(), //方法调用
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
        p {
          font-weight: 400;
          color: #5777e7;
          cursor: pointer;
        }
      }
    }
  }
  .content_used_announcement {
    // position: relative;
    flex: 1;
    .announcement {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #edeef2;
      .announcement1 {
        p {
          margin-bottom: 14px;
        }
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
        width: 30px;
        height: 30px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        p {
          color: #5777e7;
          cursor: pointer;
          text-align: center;
          line-height: 30px;
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
.tit {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  // cursor: pointer;
}
.content_job {
  margin-bottom: 55px;
  .job {
    display: flex;
    .job_detail {
      display: flex;
      width: 25%;
      cursor: pointer;
      img {
        width: 48px;
        height: 52px;
        border-radius: 6px;
        margin-right: 16px;
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
}
.content_dynamic {
  .dynamic {
    display: flex;
    flex-wrap: wrap;
    .dynamic_detail {
      display: flex;
      width: 33%;
      margin-bottom: 30px;
      cursor: pointer;
      img {
        width: 72px;
        height: 72px;
        border-radius: 20px;
        margin-right: 20px;
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
}
</style>