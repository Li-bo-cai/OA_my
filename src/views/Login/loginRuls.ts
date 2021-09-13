// 自定义表单校验
export default () => {
    // 自定义规则
    const checNumber = (value: any, callback: any) => {
        console.log(value);
        
        if (!Number.isInteger(value)) {
            callback(value = value.replace(/[^\d.]/g, ''))
        }
    }

    // 规则
    const loginRules = {
        username: [
            { required: true, message: "手机号/用户工号不能为空" },
            { validator: checNumber, trigger: 'input' },
            {
                min: 8,
                max: 11,
                message: "长度在 8 到 11 个字符",
                trigger: "blur",
            },
        ],
        code: [{ required: true, message: "验证码不能为空" }],
        password: [],
    };

    return {
        loginRules,  //登录规则
        checNumber,
    }
}