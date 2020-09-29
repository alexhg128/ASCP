export class DiffieHellman {

    q:bigint = 0n;
    α:bigint = 0n;
    x:bigint = 0n;

    constructor(q: bigint, α: bigint) {
        this.q = q;
        this.α = α;
    }

    randomX() {
        this.x = BigInt(Math.random()) * (this.q - 0n) + 0n;
    }

    public setX(x:bigint) {
        this.x = x;
    }

    getY() {
        return this.modPow(this.α, this.x, this.q);
    }

    getK(y: bigint) {
        return this.modPow(y, this.x, this.q);
    }

    private modPow(base: bigint, exp: bigint, m:bigint) : bigint {

        var result = 1n;
     
        while (exp > 0) {
           if ((exp & 1n) > 0) result = (result * base) % m;
           exp >>= 1n;
           base = (base * base) % m;
        }
     
        return result;
     
    }

}