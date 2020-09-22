import { fork } from "child_process";
import { Subject } from "rxjs";

var server_process;
var client_process;
var message: Subject<string> = new Subject<string>();

export default {
    init: () => {
        server_process = fork("./dist/connectivity/server.js");
        client_process = fork("./dist/connectivity/client.js");
        server_process.on("message", (msg) => {
            message.next(msg);
        });
    },
    message: message,
    send: (msg) => {
        client_process.send(msg);
    }
}
