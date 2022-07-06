import input from "./modules/input"
import textarea from "./modules/textarea"
import select from './modules/select'

const toolBagJs = {
    tools: [
        {
            label: '输入控件',
            toolItem: [
                input,
                textarea,
                select
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
    schemaData: []
}

export default toolBagJs