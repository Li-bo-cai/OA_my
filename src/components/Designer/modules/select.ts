import modifyToolJS from "../modifyTool"
const select = {
    id: '3',
    type: '1-3',
    info: {
        type: "string",
        title: "下拉框",
        "x-decorator": "FormItem",
        "x-decorator-props": {
            "labelCol": 5,
            "wrapperCol": 16,
        },
        "x-component": "Select",
        "x-component-props": {
            info: {}
        }
    },
}
select.info['x-component-props'].info = modifyToolJS(select)

export default select
