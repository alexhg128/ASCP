import CryptoJS from "crypto-js";
import { mode } from "crypto-js";

export default class ASCP {

    constructor(
        version: number,
        message: string
    ) {
        this.version = version;
        this.size = message.length;
        if(this.size > 236) {
            this.size = 236;
            this.message = message.substr(0,236);
        } else {
            this.message = message;
        }
    }

    version: number;
    size: number;
    fun: number = 0;
    state: number = 0;
    session: number = 0;
    message: string;

    to_bytes() : Uint8Array {
        var bytes = new Uint8Array(256);
        bytes[0] = 65;
        bytes[1] = 83;
        bytes[2] = 67;
        bytes[3] = 80;

        var num_b;

        // Version
        num_b = this.get_bytes(this.version);
        for(var i = 0; i < 5; i++) {
            bytes[i + 4] = num_b[i + 3];
        }

        // Size
        num_b = this.get_bytes(this.size);
        bytes[9] = num_b[7];

        // Function
        num_b = this.get_bytes(this.fun);
        for(var i = 0; i < 2; i++) {
            bytes[i + 10] = num_b[i + 6];
        }

        // State
        num_b = this.get_bytes(this.state);
        for(var i = 0; i < 4; i++) {
            bytes[i + 12] = num_b[i + 4];
        }

        // Session
        num_b = this.get_bytes(this.session);
        for(var i = 0; i < 4; i++) {
            bytes[i + 16] = num_b[i + 4];
        }

        // Message
        for(var i = 0; i < this.message.length; i++) {
            bytes[i + 20] = this.message.charCodeAt(i);
        }

        return bytes;
    }

    to_encrypted_bytes(key: any) : Uint8Array {
        var bytes = new Uint8Array(256);
        bytes[0] = 65;
        bytes[1] = 83;
        bytes[2] = 67;
        bytes[3] = 80;

        var num_b;

        // Version
        num_b = this.get_bytes(this.version);
        for(var i = 0; i < 5; i++) {
            bytes[i + 4] = num_b[i + 3];
        }

        // Size
        num_b = this.get_bytes(this.size);
        bytes[9] = num_b[7];

        // Function
        num_b = this.get_bytes(this.fun);
        for(var i = 0; i < 2; i++) {
            bytes[i + 10] = num_b[i + 6];
        }

        // State
        num_b = this.get_bytes(this.state);
        for(var i = 0; i < 4; i++) {
            bytes[i + 12] = num_b[i + 4];
        }

        // Session
        num_b = this.get_bytes(this.session);
        for(var i = 0; i < 4; i++) {
            bytes[i + 16] = num_b[i + 4];
        }

        // Message
        for(var i = 0; i < this.message.length; i++) {
            bytes[i + 20] = this.message.charCodeAt(i);
        }

        var wa = this.byteArrayToWordArray(bytes);
        var cry = CryptoJS.DES.encrypt(wa, key, {
            mode: mode.ECB
        });
        var ba = this.wordArrayToByteArray(cry.ciphertext, 256);
        return new Uint8Array(ba);
    }

    private get_bytes(x: number) {
        var bytes = [];
        var i = 8;
        do {
            bytes[--i] = x & (255);
            x = x>>8;
        } while ( i )
        return bytes;
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

}