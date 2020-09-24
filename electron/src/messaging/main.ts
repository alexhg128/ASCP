import { from_bytes, from_string_v1 } from "./ascp_factory";
import { Server } from "./server";

function print_bytes(bytes:Uint8Array) {
    for(var i = 1; i <= 256; i++) {
        process.stdout.write(bytes[i - 1] + " ");
        if(i % 10 == 0) {
            process.stdout.write("\n");
        }
    }
}

var frame = from_string_v1("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log(frame);
var bytes = frame.to_bytes();
print_bytes(bytes);
frame = from_bytes(bytes);
console.log(frame);

var s = new Server();
s.setKey("ABCD");