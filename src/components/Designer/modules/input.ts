import modifyToolJS from "../modifyTool"
const input = {
    id: '1',
    type: '1-1',
    info: {
        type: "string",
        title: "输入框",
        "x-decorator": "FormItem",
        "x-decorator-props": {
            "labelCol": 5,
            "wrapperCol": 16,
        },
        "x-component": "Input",
        "x-component-props": {
            info: {}
        }
    },
}
input.info['x-component-props'].info = modifyToolJS(input)

export default input
