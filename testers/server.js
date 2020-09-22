const net = require("net");

var server = net.createServer((socket) => {
    console.log(socket.address());
    socket.on("data", (data) => {
        console.log(data.toString("ascii"))
        socket.write(data);
        socket.end();
    })
});
server.listen(5000, '0.0.0.0');