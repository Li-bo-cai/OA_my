import { onMounted, ref } from "vue";
import { department_com_show2 } from "@/api/organization/organization.api";

export default () => {
    const search_people = ref<string>('')
    const  organizaData = ref([]);
    // 获取架构树
    const organiza = () => {
        department_com_show2().then((res) => {
            if(res.data.data.code == 1){
                organizaData.value = res.data.data;
            }
        });
    };

    return{
        search_people,
        organizaData,
        organiza 
    }
}