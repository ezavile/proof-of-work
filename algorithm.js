const hash = require('./hash');
const validateHash = require('./validateHash');

module.exports = function algorithm(proof, message, difficulty, nonce) {
  while (!validateHash(proof, difficulty)) {
    nonce++;
    proof = hash.doubleHashing(message + nonce);
  }
  return {
    hash: proof,
    nonce,
  };
}