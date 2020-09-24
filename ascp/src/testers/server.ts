import { Server } from "../server_interface";

var server = new Server();
server.init();
server.setKey("ABCDEF")

server.on_status.subscribe((status) => {
    console.log(status);
});

server.on_message.subscribe((message) => {
    console.log(message);
    server.send(message);
});