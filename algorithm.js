const hash = require('./hash');
const validateHash = require('./validateHash');

module.exports = function algorithm(proof, message, difficulty, nonce) {
  if (!validateHash(proof, difficulty)) {
    nonce++;
    proof = message + nonce;
    return algorithm(hash.doubleHashing(proof), message, difficulty, nonce);
  } else {
    return {
      hash: proof,
      nonce,
    };
  }
}