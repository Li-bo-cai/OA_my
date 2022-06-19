const toolBagJs = {
    tools: [
        {
            label: '输入控件',
            toolItem: [
                {
                    id: '1',
                    type: '1-1',
                    info: {
                        type: "string",
                        title: "输入框",
                        "x-decorator": "FormItem",
                        "x-component": "Input",
                    }
                },
                {
                    id: '2',
                    type: '1-2',
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
        // {
        //     id: '3',
        //     info: {
        //         type: "string",
        //         title: "输入框",
        //         "x-decorator": "FormItem",
        //         "x-component": "Input",
        //     }
        // },
        // {
        //     id: '4',
        //     info: {
        //         type: "string",
        //         title: "文本框",
        //         "x-decorator": "FormItem",
        //         "x-component": "Input.TextArea",
        //         "x-component-props": {
        //             type: "textarea",
        //         },
        //     }
        // }
    ]
}

export default toolBagJs