import { Schema, Stringify, } from "@formily/vue";

type T = {
    id: number,
    type: string,
    info: Stringify<any>
}

type Any = {
    [key: string]: any
}

export default class SelfFunc {
    transFormJSON(myJson: Array<T>): Array<Any> {
        return myJson.map((item, index) => {
            return { [item.id]: item.info }
        })
    }
}

