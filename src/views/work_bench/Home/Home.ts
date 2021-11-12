import { defineComponent, getCurrentInstance, reactive } from "@vue/runtime-dom";
import { useRouter } from "vue-router";
// 首页数据加载
export default () => {
    const router = useRouter()
    // 窗口显示控制
    const display = reactive({
        dialogVisible: false,
        showVive: false,
        showVive2: false,
        showVive3: false,
        showVive4: false,
        showVive5: false,
    });
    // 我的考勤
    const go_attendance = () => {
        router.push("my-attendance");
    };
    // 请假申请
    const leave_request = () => {
        router.push("leave_request");
    };
    // 待处理工作
    const get_pending_work = () => {
        router.push("PendingWork");
    };
    // 去处理
    const go_handle = (item: any) => {
        router.push("ToPending");
    };
    // 企业公告
    const go_notice = (item: any) => {
        router.push("companyAnnounce");
    };
    // 企业公告页面
    const go_notice_page = () => {
        router.push("companyAnnounce");
    };
    // 文件资源
    const go_document = (item: any) => {
        router.push("document");
    };
    // 文件资源页面
    const go_document_page = () => {
        router.push("document");
    };
    // 集团动态
    const go_dynamic = (item: any) => {
        router.push("groupDynamics");
    };
    // 集团动态页面
    const go_dynamic_page = () => {
        router.push("groupDynamics");
    };

    return {
        ...display, //窗口显示
        go_attendance,
        leave_request,
        get_pending_work,
        go_handle,
        go_notice,
        go_notice_page,
        go_document,
        go_document_page,
        go_dynamic,
        go_dynamic_page,
    }
}
