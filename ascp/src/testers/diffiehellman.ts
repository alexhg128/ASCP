import * as readline from 'readline'
import { DiffieHellman } from '../diffiehellman';

var dh, name, peer, q, alpha, x, y;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Are you Alice or Bob (A/B)? ', (answer) => {
  if(answer == "A" || answer == "a") {
    name = "Alice";
    peer = "Bob";
  } else {
    name = "Bob";
    peer = "Alice";
  }
    rl.question('Enter public alpha: ', (answer) => {
        alpha = BigInt(answer);
        rl.question('Enter public q: ', (answer) => {
            q = BigInt(answer);
            dh = new DiffieHellman(q, alpha);
            rl.question('Enter ' + name + ' private X: ', (answer) => {
                x = BigInt(answer);
                dh.setX(x);
                console.log("\n📤 " + name + " public Y is " + dh.getY() + "\n");
                rl.question('Enter ' + peer + ' public Y: ', (answer) => {
                    y = BigInt(answer);
                    console.log("\n🔑 Shared key is " + dh.getK(y) + "\n");
                    rl.close();
                });
            });
        });
    });
});