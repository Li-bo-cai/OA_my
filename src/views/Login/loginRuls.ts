import { ref } from "vue";

// 自定义表单校验
export default () => {
    const codeMsg = ref<string>("获取验证码");
    const disabled = ref<boolean>(false);

//     let time = 60;
//      //倒计时事件
//      const count_down = () => {
//         const timer = setInterval(() => {
//           if (time > 1) {
//             time--;
//             codeMsg.value = `重新获取(${time})`;
//           } else {
//             clearInterval(timer);
//             codeMsg.value = "获取验证码";
//             disabled.value = false;
//           }
//         //   console.log(time);
//         }, 1000);
//       };
//   // 获取验证码
//     const get_code = () => {
//       disabled.value = true;
//       get_phone_code().then((res:any) => {
//         console.log(res);
//       });
//       count_down();
//     };

    // 自定义规则
    const allInput = (rule: any, value: string, callback: any) => {
        const reg = /(\s[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+\s)/
        if (reg.test(value)) {
            callback(value = value.replace(reg, ""))
        } else {
            callback()
        }
    }
    // const validPassword = (rule: any, value: string, callback: any) => {
    //     const reg = /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,12}/
    //     if (!reg.test(value)) {
    //         callback(new Error('密码组合错误'))
    //     } else {
    //         callback()
    //     }
    // };
    // 规则
    const loginRules = {
        account: [
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
                // validator: validPassword,
                trigger: "blur"
            }
        ],
    };

    return {
        loginRules,  //登录规则
        codeMsg, //按钮文本
        disabled, //按钮状态
    }
}