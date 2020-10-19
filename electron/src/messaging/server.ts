import CryptoJS from 'crypto-js';
import * as net from 'net'
import { Subject } from 'rxjs';
import ASCP from './ascp';
import { from_bytes, from_encypted_bytes, from_string_v1 } from './ascp_factory';
import { DiffieHellman } from './diffiehellman';

export class Server {

    server: net.Server;
    socket: net.Socket;
    status: Status = Status.LISTENING;
    address: string | net.AddressInfo;
    key: any;
    encrypt: boolean = false;
    dh: DiffieHellman = undefined;

    on_status: Subject<Status> = new Subject<Status>();
    on_message: Subject<string> = new Subject<string>();
    on_key: Subject<string> = new Subject<string>();

    listen(port: number = 2020) {
        this.server = net.createServer((socket) => {
            this.server.maxConnections = 1;

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
                        switch(frame.fun) {
                            case 1:
                                this.on_message.next(frame.message);
                                break;
                            case 2:
                                var vars = this.parseDH(frame.message);
                                this.dh = new DiffieHellman(vars['q'], vars['a']);
                                this.dh.randomX();
                                var ascp = from_string_v1(this.buildDH(vars['q'], vars['a'], this.dh.getY()));
                                ascp.fun = 3;
                                socket.write(ascp.to_bytes());

                                var k = this.dh.getK(vars['y']);
                                var k_s = k.toString(16);
                                console.log(k_s);
                                console.log(k_s.length)
                                if(k_s.length < 16) {
                                    var size = k_s.length;
                                    for(var i = 0; i < 16 - size; i++) {
                                      k_s = '0' + k_s;
                                      console.log(k_s);
                                    }
                                    console.log(k_s);
                                }
                                this.on_key.next(k_s);
                                this.setKey(k_s);
                                break;
                            default:
                                console.log("Unknown frame");
                                console.log(frame);
                        }
                    }
                } catch(err) {

                }
            });

            socket.on("end", () => {
                console.log("Closing socket");
                console.log(this.key);
                this.resetKet();
                console.log(this.key)
                this.status = Status.LISTENING;
                this.on_status.next(this.status);
            });

            this.socket = socket;

        });
        process.on('uncaughtException', (err:any) => {
            if(err.errno === 'EADDRINUSE') {
                console.log("Address in use");
            } else {
                console.log(err);
                process.exit(1);
            }
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

        this.address = ip;

        this.socket = new net.Socket();
        this.socket.connect(port, ip, () => {
            this.status = Status.CONNECTED_CLIENT;
            this.on_status.next(this.status);
            this.dh = new DiffieHellman(2426697107n, 17123207n);
            this.dh.randomX();
            var ascp = from_string_v1(this.buildDH(this.dh.q, this.dh.α, this.dh.getY()));
            ascp.fun = 2;
            console.log(ascp);
            this.socket.write(ascp.to_bytes());
        });

        this.socket.on('data', (data) => {
            try {
                if(this.encrypt) {
                    var frame = from_encypted_bytes(new Uint8Array(data), this.key);
                    this.on_message.next(frame.message);
                } else {
                    var frame = from_bytes(new Uint8Array(data));
                    switch(frame.fun) {
                        case 1:
                            this.on_message.next(frame.message);
                            break;
                        case 3:
                            var vars = this.parseDH(frame.message);
                            var k = this.dh.getK(vars['y']);
                            var k_s = k.toString(16);
                            console.log(k_s)
                            if(k_s.length < 16) {
                                var size =k_s.length;
                                for(var i = 0; i < 16 - size; i++) {
                                  k_s = '0' + k_s;
                                }
                                console.log(k_s);
                            }
                            console.log(k_s);
                            this.on_key.next(k_s);
                            this.setKey(k_s);
                            break;
                        default:
                            console.log("Unknown frame");
                            console.log(frame);
                    }
                    console.log("Received");
                    console.log(frame);
                }
            } catch(err) {

            }
        });

        this.socket.on('close', () => {
            this.resetKet();
            this.status = Status.LISTENING;
            this.on_status.next(this.status);
        });

    }

    disconnect() {
        if(this.status != Status.LISTENING) {
            this.resetKet();
            this.socket.end();
        }
    }

    quit() {
        if(!this.server) return;
        this.server.close();
    }

    send(message: string) {
        if(this.status != Status.LISTENING) {
            console.log("Sending");
            console.log(bytes);
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
        console.log(this.key);
        console.log(this.wordArrayToByteArray(this.key, 56));

        this.encrypt = true;
    }

    resetKet() {
        console.log("Reset key");
        this.encrypt = false;
        this.key = undefined;
    }

    private byteArrayToWordArray(ba: any) {
        var wa = [],
            i;
        for (i = 0; i < ba.length; i++) {
            wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
        }
    
        return (CryptoJS.lib.WordArray as any).create(wa, ba.length);
    }
    
    private wordToByteArray(word, length) {
        var ba = [],
            i,
            xFF = 0xFF;
        if (length > 0)
            ba.push(word >>> 24);
        if (length > 1)
            ba.push((word >>> 16) & xFF);
        if (length > 2)
            ba.push((word >>> 8) & xFF);
        if (length > 3)
            ba.push(word & xFF);
    
        return ba;
    }
    
    private wordArrayToByteArray(wordArray, length) {
        if (wordArray.hasOwnProperty("sigBytes") && wordArray.hasOwnProperty("words")) {
            length = wordArray.sigBytes;
            wordArray = wordArray.words;
        }
    
        var result = [],
            bytes,
            i = 0;
        while (length > 0) {
            bytes = this.wordToByteArray(wordArray[i], Math.min(4, length));
            length -= bytes.length;
            result.push(bytes);
            i++;
        }
        return [].concat.apply([], result);
    }

    parseDH(str: string) {
        var obj = {};
        var lines = str.split(',');
        for(var i = 0; i < lines.length; i++) {
            var pair = lines[i].split('=');
            console.log(pair[1]);
            obj[pair[0]] = BigInt(pair[1]);
        }
        return obj;
    }

    buildDH(q: bigint, a: bigint, y: bigint) {
        var str: string = "";
        str += `q=${ q.toString() },`;
        str += `a=${ a.toString() },`;
        str += `y=${ y.toString() }`;
        console.log(str);
        return str;
    }

}

export enum Status {
    CONNECTED_SERVER,
    CONNECTED_CLIENT,
    LISTENING
}