import { ChildProcess, fork } from "child_process";
import { AddressInfo } from "net";
import { Subject } from "rxjs";
import { Status } from "./server";
import { MessageType, WorkerMessage } from "./worker_message";

export class Server {

    server_process: ChildProcess;
    address: string | AddressInfo;

    on_message: Subject<string> = new Subject<string>();
    on_status: Subject<Status> = new Subject<Status>();
    on_key: Subject<string> = new Subject<string>();

    last_message: string;
    last_status: string;

    constructor() {
        this.server_process = fork('./dist/messaging/server_worker');
        this.server_process.on("message", (message: WorkerMessage) => {
            console.log(message);
            switch(message.type) {
                case MessageType.MESSAGE:
                    this.on_message.next(message.payload as string);
                    this.last_message = message.payload;
                    break;
                case MessageType.ADDRESS:
                    this.address = message.payload;
                    break;
                case MessageType.STATUS:
                    this.on_status.next(message.payload as Status);
                    this.last_status = message.payload;
                    break;
                case MessageType.KEY:
                    this.on_key.next(message.payload);
                    break;
            }
        });
    }
    
    init() {
        this.server_process.send({
            type: MessageType.INIT_SERVER,
            payload: {}
        } as WorkerMessage)
    }

    connect(address: string) {
        this.server_process.send({
            type: MessageType.CONNECT,
            payload: address
        } as WorkerMessage)
    }

    disconnect() {
        this.server_process.send({
            type: MessageType.DISCONNECT,
            payload: {}
        } as WorkerMessage)
    }

    quit() {
        this.server_process.send({
            type: MessageType.QUIT,
            payload: {}
        } as WorkerMessage)
    }

    send(message: string) {
        this.server_process.send({
            type: MessageType.SEND,
            payload: message
        } as WorkerMessage)
    }

    setKey(key: string) {
        this.server_process.send({
            type: MessageType.SET_KEY,
            payload: key
        } as WorkerMessage)
    }

    resetKey() {
        this.server_process.send({
            type: MessageType.RESET_KEY,
            payload: {}
        } as WorkerMessage)
    }

}