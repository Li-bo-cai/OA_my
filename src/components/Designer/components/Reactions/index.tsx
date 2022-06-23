import { createForm } from '@formily/core';
import { clone } from '@formily/shared';
import * as vue from 'vue';
import { ref } from 'vue';

export const Reactions = vue.defineComponent({
    setup(props) {
        
        const modalVisibleRef = ref(false); //弹窗开关
        const formRef = ref(createForm({}))

        const openModal = () => (modalVisibleRef.value = true)
        const handleClose = () => {
            // 关闭弹窗
            modalVisibleRef.value = false
        }

        return () => {
            const form = formRef.value
            return (
                <div>
                    <el-button onClick={openModal}>配置响应器</el-button>
                    <el-dialog
                        v-model={modalVisibleRef.value}
                        width="50%"
                        before-close={handleClose}
                        v-slots={{
                            header: () => (
                                <div>配置可选项</div>
                            ),
                            footer: () => (
                                <span class={'dialog-footer'}>
                                    <el-button onclick={handleClose}>取消</el-button>
                                    <el-button type="primary" onclick={confirm}>确定</el-button>
                                </span>
                            )
                        }}
                    >
                        <div class={'header'}>

                        </div>
                    </el-dialog>
                </div>
            )
        }
    }
})