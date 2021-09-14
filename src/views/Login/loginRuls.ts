// 自定义表单校验
export default () => {
    // 自定义规则
    const allInput = (rule: any, value: string, callback: any) => {
        const reg = /(\s[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+\s)/
        if (reg.test(value)) {
            callback(value = value.replace(reg, ""))
        } else {
            callback()
        }
    }
    const validPassword = (rule: any, value: string, callback: any) => {
        const reg = /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,12}/
        if (!reg.test(value)) {
            callback(new Error('密码组合错误'))
        } else {
            callback()
        }
    };
    // 规则
    const loginRules = {
        username: [
            {
                required: true,
                message: "手机号/用户工号不能为空",
                trigger: 'blur'
            },
            {
                validator: allInput,
                trigger: "input"
            },
            {
                min: 8,
                max: 11,
                message: "长度在 8 到 11 个字符",
                trigger: "blur",
            },
        ],
        code: [
            {
                required: true,
                message: "验证码不能为空",
                trigger: 'blur'
            },
            {
                validator: allInput,
                trigger: "input"
            },
        ],
        password: [
            {
                required: true,
                message: "密码不能为空",
                trigger: 'blur'
            },
            {
                validator: allInput,
                trigger: "input"
            },
            {
                min: 6,
                max: 10,
                message: "长度在 8 到 12 个字符",
                trigger: "blur",
            },
            {
                validator: validPassword,
                trigger: "blur"
            }
        ],
    };

    return {
        loginRules,  //登录规则
    }
}