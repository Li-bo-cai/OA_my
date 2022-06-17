const toolBagJs = {
    tools: [
        {
            label: '输入控件',
            toolItem: [
                { name: "库存", id: 1, disabledMove: false, disabledPark: false },
                { name: "输入框", id: 2, disabledMove: false, disabledPark: false }
            ]
        },
        {
            label: '布局组件',
            toolItem: []
        },
        {
            label: '自增组件',
            toolItem: []
        },
    ],
    sechmaData: [
        {
            id: 1,
            info: {
                type: "string",
                title: "输入框",
                "x-decorator": "FormItem",
                "x-component": "Input",
            }
        },
        {
            id: 2,
            info: {
                type: "string",
                title: "文本框",
                "x-decorator": "FormItem",
                "x-component": "Input.TextArea",
                "x-component-props": {
                    type: "textarea",
                },
            }
        }
    ]
}

export default toolBagJs