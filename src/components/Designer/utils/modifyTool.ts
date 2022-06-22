const modifyToolJS = [
    {
        label: '字段属性',
        sechmaItem: {
            type: "object",
            properties: {
                "id": {
                    type: "string",
                    title: "字段ID",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Input",
                },
                "title": {
                    type: "string",
                    title: "标题",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Input",
                },
                "description": {
                    type: "string",
                    title: "描述",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Input.TextArea",
                    "x-component-props": {
                        type: "textarea",
                    },
                },
                "x-display": {
                    title: "展示状态",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Select",
                    "enum": [
                        {
                            "label": "显示",
                            "value": "visible"
                        },
                        {
                            "label": "半隐藏",
                            "value": "hidden"
                        },
                        {
                            "label": "全隐藏",
                            "value": "none"
                        },
                    ],
                    "default": "显示"
                },
                "x-pattern": {
                    title: "展示状态",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Select",
                    "enum": [
                        {
                            "label": "可编辑",
                            "value": "editable"
                        },
                        {
                            "label": "禁用",
                            "value": "disabled"
                        },
                        {
                            "label": "只读",
                            "value": "readOnly"
                        },
                    ],
                    "default": "可编辑"
                },
                "default": {
                    type: "string",
                    title: "默认值",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Input",
                },
                "enum": {
                    title: "可选项",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "DataSource",
                },
                "x-reactions": {
                    title: '响应器规则',
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                        "labelCol": 6,
                        "wrapperCol": 18,
                        "labelAlign": "left"
                    },
                    "x-component": "Reactions",
                }

            }
        }
    },
    {
        label: '组件属性',
        sechmaItem: {}
    },
    {
        label: '容器属性',
        sechmaItem: {}
    },
    {
        label: '组件样式',
        sechmaItem: {}
    },
    {
        label: '容器样式',
        sechmaItem: {}
    },

]


export default modifyToolJS