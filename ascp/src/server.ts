import CryptoJS from 'crypto-js';
import * as net from 'net'
import { Subject } from 'rxjs';
import ASCP from './ascp';
import { from_bytes, from_encypted_bytes, from_string_v1 } from './ascp_factory';

export class Server {

    server: net.Server;
    socket: net.Socket;
    status: Status = Status.LISTENING;
    address: string | net.AddressInfo;
    key: any;
    encrypt: boolean = false;

    on_status: Subject<Status> = new Subject<Status>();
    on_message: Subject<string> = new Subject<string>();

    listen(port: number = 2020) {
        console.log(port);
        this.server = net.createServer((socket) => {

            if(this.status != Status.LISTENING) {
                socket.end();
            }

            this.address = socket.address();
            this.status = Status.CONNECTED_SERVER;
            this.on_status.next(this.status);

            socket.on("data", (data: Buffer) => {
                try {
                    if(this.encrypt) {
                        var frame = from_encypted_bytes(new Uint8Array(data), this.key);
                        this.on_message.next(frame.message);
                    } else {
                        var frame = from_bytes(new Uint8Array(data));
                        this.on_message.next(frame.message);
                    }
                } catch(err) {

                }
            });

            socket.on("close", () => {
                this.status = Status.LISTENING;
                this.on_status.next(this.status);
            });

            this.socket = socket;

        });
        this.server.listen(port, '0.0.0.0');
    } 

    connect(ip: string, port: number = 2020) {

        if(this.status != Status.LISTENING) {
            throw "Already connected to a peer."
        }

        const reg = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
        if(!ip.match(reg)) {
            throw "Not a valid ip.";
        }

        this.socket = new net.Socket();
        this.socket.connect(port, ip, () => {
            this.status = Status.CONNECTED_CLIENT;
            this.on_status.next(this.status);
            this.address = ip;
        });

        this.socket.on('data', (data) => {
            try {
                if(this.encrypt) {
                    var frame = from_encypted_bytes(new Uint8Array(data), this.key);
                    this.on_message.next(frame.message);
                } else {
                    var frame = from_bytes(new Uint8Array(data));
                    this.on_message.next(frame.message);
                }
            } catch(err) {

            }
        });

        this.socket.on('close', () => {
            this.status = Status.LISTENING;
            this.on_status.next(this.status);
        });

    }

    disconnect() {
        if(this.status != Status.LISTENING) {
            this.socket.destroy();
        }
    }

    quit() {
        this.server.close();
    }

    send(message: string) {
        if(this.status != Status.LISTENING) {
            if(this.encrypt) {
                var ascp = from_string_v1(message);
                var bytes = ascp.to_encrypted_bytes(this.key);
                this.socket.write(bytes);
            } else {
                var ascp = from_string_v1(message);
                var bytes = ascp.to_bytes();
                this.socket.write(bytes);
            }
        }
    }

    setKey(key:string) {
        this.key = CryptoJS.enc.Hex.parse(key);
        this.encrypt = true;
    }

    resetKet() {
        this.encrypt = false;
        this.key = undefined;
    }

}

export enum Status {
    CONNECTED_SERVER,
    CONNECTED_CLIENT,
    LISTENING
}