const readline = require('readline');
const algorithm = require('./algorithm');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('message to hash: ', (message) => {
  rl.question('difficulty (3 recommended): ', (difficulty) => {
    console.time('Finished after')
    const proof = algorithm('', message, difficulty, 0);
    console.timeEnd('Finished after')
    console.log(`PoW Hash: ${proof.hash}`);
    console.log(`Nonce used: ${proof.nonce}`);
    rl.close();
  });
});
