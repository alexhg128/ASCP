import { Status } from "../server";
import { Server } from "../server_interface";

var server = new Server();
server.connect("127.0.0.1");
server.setKey("ABCDEF")

server.on_message.subscribe((message) => {
    console.log(message);
});

server.on_status.subscribe((status) => {
    console.log(status);
    if(status == Status.CONNECTED_CLIENT) {
        server.send("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
});
