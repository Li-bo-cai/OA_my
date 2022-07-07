import modifyToolJS from "../modifyTool"
const textarea = {
    id: '2',
    type: '1-2',
    info: {
        type: "string",
        title: "文本框",
        "x-decorator": "FormItem",
        "x-decorator-props": {
            "labelCol": 5,
            "wrapperCol": 16,
        },
        "x-component": "Input.TextArea",
        "x-component-props": {
            type: "textarea",
            info: {}
        },
    }
}
textarea.info['x-component-props'].info = modifyToolJS()

export default textarea
