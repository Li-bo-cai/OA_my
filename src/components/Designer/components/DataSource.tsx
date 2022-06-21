import * as vue from 'vue';
import { reactive, ref } from 'vue';
import uuid from '../utils/getUid'
import { createForm, onFormInputChange, onFormReact } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Input, ArrayItems, Space } from '@formily/element-plus'
import './DataSource.scss'
const React = { createElement: vue.h, Fragment: vue.Fragment }

type stateInfc = {
    [key: string]: any
}
const { SchemaField } = createSchemaField({
    components: {
        FormItem,
        Input,
        ArrayItems,
        Space
    }
})

export const DataSource = vue.defineComponent({
    setup(props, context) {
        const modalVisibleRef = ref(true); //弹窗开关
        const state = ref<Array<stateInfc>>([])   //配置数据树
        const activeItem = ref();  //当前选中节点
        const formRef = ref(createForm())  //表单数据
        const openModal = () => (modalVisibleRef.value = true)
        const handleClose = () => (modalVisibleRef.value = false)

        const addStateClick = () => {
            // 新增节点
            state.value.push({
                label: `选项${state.value.length + 1}`,
                value: uuid(8, 16)
            })
        }
        const activeItemClick = (item: any) => {
            // 选中节点
            return () => {
                activeItem.value = item;
                const arr: { label: string; value: any; }[] = []
                Object.keys(item).map((_item) => {
                    arr.push({
                        label: _item,
                        value: item[_item]
                    })
                })
                formRef.value = createForm({
                    values: {
                        'map': [...arr]
                    },
                    effects() {
                        onFormReact((form) => {
                            console.log(form, "实现表单响应式逻辑");
                        });
                        onFormInputChange((form) => {
                            console.log(form);
                        })
                    },
                })
            }
        }

        const delItemClick = (value: number) => {
            // 删除左侧数据
            return () => {
                state.value.splice(value, 1)
            }
        }

        return () => {
            const form = formRef.value;
            return (
                <div>
                    <el-button onClick={openModal}>配置可选项</el-button>
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
                                    <el-button onclick={handleClose}>Cancel</el-button>
                                    <el-button type="primary" onclick={handleClose}  >Confirm</el-button>
                                </span>
                            )
                        }}
                    >
                        <div class={'configC-box'}>
                            <div class={'left-tree-box'}>

                                <div class={'header'}>
                                    <div>可选项节点树</div>
                                    <el-button size="large" text icon={"Plus"} onClick={addStateClick}>新增节点</el-button>
                                </div>

                                <el-scrollbar height="40vh">
                                    <div class={'options-box'}>
                                        {state.value.map((item, index) => {
                                            return (
                                                <div class={item.value == (activeItem.value && activeItem.value.value) ? 'option-Item is_active' : 'option-Item is_hover'} onClick={activeItemClick(item)}>
                                                    <div>{item.label || item.value || '默认标题'}</div>
                                                    <svg class={'delete-icon'} onClick={delItemClick(index)} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </el-scrollbar>

                            </div>
                            <div class={'right-property-box'}>
                                <div class={'header'}>
                                    <div>节点属性</div>
                                    {activeItem.value && <el-button size="large" text icon={"Plus"} onClick={() => {
                                        //新增键值对
                                        form.setFieldState('map', (state: any) => {
                                            state.value.push({})
                                        })
                                    }}>添加键值对</el-button>}
                                </div>

                                <el-scrollbar height="40vh">
                                    <div class={'options-box'}>
                                        <FormProvider form={form}>
                                            <SchemaField
                                                schema={{
                                                    type: 'object',
                                                    properties: {
                                                        map: {
                                                            type: 'array',
                                                            'x-component': 'ArrayItems',
                                                            items: {
                                                                type: 'object',
                                                                'x-decorator': 'ArrayItems.Item',
                                                                'x-decorator-props': { type: 'divide' },
                                                                'x-component': 'Space',
                                                                properties: {
                                                                    label: {
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            label: '键名'
                                                                        },
                                                                        name: 'label',
                                                                        'x-component': 'Input'
                                                                    },
                                                                    value: {
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            label: '键值'
                                                                        },
                                                                        name: 'value',
                                                                        'x-component': 'Input'
                                                                    },
                                                                    remove: {
                                                                        type: 'void',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'ArrayItems.Remove',
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }}
                                            />
                                        </FormProvider>
                                    </div>
                                </el-scrollbar>

                            </div>
                        </div >
                    </el-dialog >
                </div >
            )
        }
    }
})