const modifyToolJS = [
    {
        label: '字段属性',
        sechmaItem: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    title: "字段标识",
                    "x-decorator": "FormItem",
                    "x-decorator-prop": {
                        
                    },
                    "x-component": "Input",
                },
                title: {
                    type: "string",
                    title: "标题",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
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