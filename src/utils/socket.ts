import io from 'socket.io-client'
import store from '@/store'

interface subjectType {
    connection: string,
    options: any,
}

export default {
    install: (app: any, { connection, options }: subjectType) => {
        const socket = io(connection, options)
        app.config.globalProperties.socket = socket
        app.provide('socket', socket)

        // 监听用户绑定消息
        socket.on('/api/message/bind', (res: any) => {
            if (res.code == 1) {
                store.commit('socketModule/SET_SOCKET_TOKEN', res.data.token)
            } else {
                console.log('请求超时');
            }
        })

    }
}