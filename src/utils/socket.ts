import io from 'socket.io-client'

interface subjectType {
    connection: string,
    options: any,
}
export default {
    install: (app: any, { connection, options }: subjectType) => {
        let socket = io(connection, options)
        socket = io({
            transportOptions: {
                polling: {
                    extraHeaders: {
                        'socket': '1234'
                    }
                }
            }
        })
        app.config.globalProperties.$socket = socket
        app.provide('socket', socket)
    }
}