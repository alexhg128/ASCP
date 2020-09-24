import CryptoJS, { mode } from "crypto-js";
import ASCP from "./ascp";

export var from_string_v1 = (message: string): ASCP => {
    return new ASCP(1, message);
}

export var from_bytes = (bytes: Uint8Array): ASCP => {
    var message = new ASCP(1, "");
    var decoder = new TextDecoder();
    if(decoder.decode(bytes.subarray(0, 4)) == "ASCP") {
        var sub : Uint8Array,
            len : number,
            buf : Buffer, 
            str: string;

        // Version
        sub = bytes.subarray(4, 9);
        len = sub.length;
        buf = Buffer.from(sub);
        message.version = buf.readUIntBE(0, len);

        // Size
        sub = bytes.subarray(9, 10);
        len = sub.length;
        buf = Buffer.from(sub);
        message.size = buf.readUIntBE(0, len);

        // Function
        sub = bytes.subarray(10, 12);
        len = sub.length;
        buf = Buffer.from(sub);
        message.fun = buf.readUIntBE(0, len);

        // State
        sub = bytes.subarray(12, 16);
        len = sub.length;
        buf = Buffer.from(sub);
        message.state = buf.readUIntBE(0, len);

        // Session
        sub = bytes.subarray(16, 20);
        len = sub.length;
        buf = Buffer.from(sub);
        message.session = buf.readUIntBE(0, len);

        // Message
        var decoder = new TextDecoder();
        str = decoder.decode(bytes.subarray(20, 20 + message.size));
        message.message = str;
        
    } else {
        throw "Not and ASCP frame."
    }
    return message;
}

export var from_encypted_bytes = (bytes: Uint8Array, key: any): ASCP => {
    var message = new ASCP(1, "");
    var decoder = new TextDecoder();
    var wa = byteArrayToWordArray(bytes);
    var cry = CryptoJS.DES.decrypt({
        ciphertext: wa,
        iv: undefined,
        salt: undefined
    }, key, {
        mode: mode.ECB
    });
    var decoded_bytes = new Uint8Array(wordArrayToByteArray(cry, 256));
    var title = decoder.decode(decoded_bytes.subarray(0, 4));
    if(title == "ASCP") {
        var sub : Uint8Array,
            len : number,
            buf : Buffer, 
            str: string;

        // Version
        sub = decoded_bytes.subarray(4, 9);
        len = sub.length;
        buf = Buffer.from(sub);
        message.version = buf.readUIntBE(0, len);

        // Size
        sub = decoded_bytes.subarray(9, 10);
        len = sub.length;
        buf = Buffer.from(sub);
        message.size = buf.readUIntBE(0, len);

        // Function
        sub = decoded_bytes.subarray(10, 12);
        len = sub.length;
        buf = Buffer.from(sub);
        message.fun = buf.readUIntBE(0, len);

        // State
        sub = decoded_bytes.subarray(12, 16);
        len = sub.length;
        buf = Buffer.from(sub);
        message.state = buf.readUIntBE(0, len);

        // Session
        sub = decoded_bytes.subarray(16, 20);
        len = sub.length;
        buf = Buffer.from(sub);
        message.session = buf.readUIntBE(0, len);

        // Message
        var decoder = new TextDecoder();
        str = decoder.decode(decoded_bytes.subarray(20, 20 + message.size));
        message.message = str;
        
    } else {
        console.log("Not ASCP");
        throw "Not and ASCP frame."
    }
    return message;
}

function byteArrayToWordArray(ba: any) {
    var wa = [],
        i;
    for (i = 0; i < ba.length; i++) {
        wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
    }

    return (CryptoJS.lib.WordArray as any).create(wa, ba.length);
}

function wordToByteArray(word, length) {
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

function wordArrayToByteArray(wordArray, length) {
    if (wordArray.hasOwnProperty("sigBytes") && wordArray.hasOwnProperty("words")) {
        length = wordArray.sigBytes;
        wordArray = wordArray.words;
    }

    var result = [],
        bytes,
        i = 0;
    while (length > 0) {
        bytes = wordToByteArray(wordArray[i], Math.min(4, length));
        length -= bytes.length;
        result.push(bytes);
        i++;
    }
    return [].concat.apply([], result);
}