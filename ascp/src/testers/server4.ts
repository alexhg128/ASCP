import { Server } from "../server_interface";

var server = new Server();
server.initPort(3024);
server.setKey("5ca85bccd4c387");

server.on_status.subscribe((status) => {
    console.log(status);
    console.log(server.address);
});

server.on_message.subscribe((message) => {
    console.log("Received -> " + message);
    server.send(caesar(message));
});

var caesar = (input: string) : string => {
    var result = "";
    for(var i = 0; i < input.length; i++) {
        result += String.fromCharCode(input.charCodeAt(i) + 1);
    }
    return result;
}