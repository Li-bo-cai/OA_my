class CommonFunc {
    /**
     * 去重方法  
     * @param oArray 去重数组
     * @returns Array
     */
    doWeight(oArray: Array<any>): Array<any> {
        const newArr = [...new Set(oArray)]
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
}

const $common = new CommonFunc();

export default $common