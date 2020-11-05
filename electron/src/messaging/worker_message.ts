export class WorkerMessage {
    type: MessageType;
    payload: any;
}

export enum MessageType {
    INIT_SERVER,
    CONNECT,
    DISCONNECT,
    QUIT,
    SEND,
    SET_KEY,
    RESET_KEY,
    MESSAGE,
    STATUS,
    ADDRESS,
    KEY,
    TOOGLE_INTEGRITY
}