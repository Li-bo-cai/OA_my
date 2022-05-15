class CommonFunc {
    /**
     * 去重方法  
     * @param oArray 去重单个数组
     * @returns Array
     */
    doWeightOnly(oArray: Array<any>): Array<any> {
        // console.log('要去重的数据',oArray);
        const newArr = [...new Set(oArray)]
        return newArr
    }
    /**
     * 
     * @param oArray 去重对象数组
     * @returns Array
     */
    doweightObject(oArray: Array<any>, attr: string): Array<any> {
        const obj: any = {};
        let newArr = [];
        newArr = oArray.reduce((cur, next) => {
            obj[next[attr]] ? "" : obj[next[attr]] = true && cur.push(next);
            return cur;
        }, [])
        return newArr
    }

    /**
     * 查找删除对应数据
     * @param oArray 查询数组 
     * @param attr 查找的属性值
     * @param price  要移除的值  
     */
    deleteAppoint(oArray: Array<any>, attr: string, price: any): Array<any> {
        const newArr: any[] = []
        oArray.forEach((item, index: number) => {
            if (item[attr] != price) {
                newArr.push(item)
            }
        })
        return newArr
    }

    /**
     * 获取两个数组相同的数据
     * @param oArray 
     * @param tArray 
     * @param attr 
     * @returns 
     */

    getSameArr(oArray: Array<any>, tArray: Array<any>, attr: string): Array<any> {
        const tempArray: any[] = [];//临时数组

        oArray.forEach((item, index) => {
            tArray.forEach((_item, _index) => {
                if (item[attr] == _item[attr]) {
                    tempArray.push(item)
                }
            })
        })

        return tempArray
    }
}

const $common = new CommonFunc();

export default $common