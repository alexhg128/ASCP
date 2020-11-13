import CryptoJS, { pad } from "crypto-js";
import { mode } from "crypto-js";

export default class ASCP {

    constructor(
        version: number,
        message: string,
        fun: number = 1
    ) {
        this.fun = fun;
        this.version = version;
        this.size = message.length;
        if(this.size > 216) {
            this.size = 216;
            this.message = message.substr(0,216);
        } else {
            this.message = message;
        }
        this.updateMac();
    }

    version: number;
    size: number;
    fun: number = 0;
    state: number = 0;
    session: number = 0;
    message: string;
    mac: Uint8Array = new Uint8Array(20);
    valid: boolean = false;

    updateMac() : void {
        this.mac = this.calculateMac();
    }

    getvalidate() : boolean {
        return this.compareByteArrays(this.mac, this.calculateMac());
    }

    validate() : void {
        this.valid = this.getvalidate();
    }


    compareByteArrays(a1: Uint8Array, a2: Uint8Array) : boolean {
        for(var i = 0; i < a1.length; i++) {
            if(a1[i] != a2[i]) {
                return false;
            }
        }
        return true;
    }

    calculateMac() : Uint8Array {
        var bytes = this.to_partial_bytes();
        var wa = this.byteArrayToWordArray(bytes);
        var hash = CryptoJS.SHA1(wa);
        var ba = this.wordArrayToByteArray(hash, 20);
        return new Uint8Array(ba);
    }

    private to_partial_bytes() : Uint8Array {
        var bytes = new Uint8Array(236);
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

        // MAC
        for(var i = 0; i < 20; i++) {
            bytes[i + 236] = this.mac[i];
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

        // MAC
        for(var i = 0; i < 20; i++) {
            bytes[i + 236] = this.mac[i];
        }

        console.log(bytes[255]);

        var wa = this.byteArrayToWordArray(bytes);
        var cry = CryptoJS.DES.encrypt(wa, key, {
            mode: mode.ECB,
            padding: pad.NoPadding
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