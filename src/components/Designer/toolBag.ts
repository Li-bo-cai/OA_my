const toolBagJs = {
    tools: [
        {
            label: '输入控件',
            toolItem: [
                {
                    id: '1',
                    type: '1-1',
                    info: {
                        type: 'void',
                        title: '输入框',
                        "x-decorator": "SelfCompt",
                        "x-decorator-props": {
                            type: "string",
                            title: "输入框",
                            "x-decorator": "FormItem",
                            "x-decorator-props": {
                                "labelCol": 5,
                                "wrapperCol": 16,
                            },
                            "x-component": "Input",
                        },
                    },
                },
                {
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
    schemaData: [
        // {
        //     id: '3',
        //     info: {
        //         type: "string",
        //         title: "输入框",
        //         "x-decorator": "FormItem",
        //         "x-decorator-props": {
        //             "labelCol": 5,
        //             "wrapperCol": 16,
        //         },
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
        //         "x-decorator-props": {
        //             "labelCol": 5,
        //             "wrapperCol": 16,
        //         },
        //         "x-component-props": {
        //             type: "textarea",
        //         },
        //     }
        // }
    ]
}

export default toolBagJs