import * as net from "net";

class Server {

    server: net.Server;

    init() {
        this.server = net.createServer((socket) => {
            console.log(socket.address());
            socket.on("data", (data) => {
                console.log(data.toString("ascii"))
                if(process.send) process.send(data.toString("ascii"));
                socket.write(data);
                socket.end();
            })
        });
        this.server.listen(2002, '0.0.0.0');
    }

    quit() {
        this.server.close();
    }

}

var server = new Server();
server.init();

process.on("message", (msg) => {
    server.quit();
});