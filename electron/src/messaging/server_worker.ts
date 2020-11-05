import { Server } from "./server";
import { MessageType, WorkerMessage } from "./worker_message";

var server = new Server();

server.on_message.subscribe((message) => {
    if(process.send) {
        process.send({
            type: MessageType.MESSAGE,
            payload: message
        } as WorkerMessage);
    }
});

server.on_status.subscribe((status) => {
    if(process.send) {
        process.send({
            type: MessageType.STATUS,
            payload: status
        } as WorkerMessage);
        process.send({
            type: MessageType.ADDRESS,
            payload: server.address
        } as WorkerMessage);
    }
});

server.on_key.subscribe((key) => {
    console.log("From process " + key);
    if(process.send) {
        process.send({
            type: MessageType.KEY,
            payload: key
        })
    }
})

process.on("message", (message: WorkerMessage) => {
    switch(message.type) {
        case MessageType.INIT_SERVER:
            server.listen();
            break;
        case MessageType.CONNECT:
            server.connect(message.payload as string);
            break;
        case MessageType.DISCONNECT:
            server.disconnect();
            break;
        case MessageType.QUIT:
            server.quit();
            break;
        case MessageType.SEND:
            server.send(message.payload);
            break;
        case MessageType.SET_KEY:
            server.setKey(message.payload);
            break;
        case MessageType.RESET_KEY:
            server.resetKet();
            break;
        case MessageType.TOOGLE_INTEGRITY: 
            server.toogleIntegrity();
            break;
    }
});