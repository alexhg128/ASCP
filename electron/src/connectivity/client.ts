import * as net from "net";

class Client {

    send(msg) {
        var client = new net.Socket();
        client.connect(5000, '127.0.0.1', function() {
            console.log('Connected');
            client.write(msg);
        });

        client.on('data', function(data) {
            console.log('Received: ' + data);
            client.destroy(); // kill client after server's response
        });

        client.on('close', function() {
            console.log('Connection closed');
        });
    }

}

var client = new Client();

process.on("message", (msg) => {
    client.send(msg)
});