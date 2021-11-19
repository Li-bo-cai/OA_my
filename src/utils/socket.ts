import io from 'socket.io-client'

interface subjectType {
    connection: string,
    options: any
}
export default {
    install: (app: any, { connection, options }: subjectType) => {
        const socket = io(connection, options)
        app.config.globalProperties.$socket = socket
        app.provide('socket', socket)
    }
}