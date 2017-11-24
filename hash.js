const crypto = require('crypto');

module.exports = {
  doubleHashing: function(message) {
    const hashing = this.hashing(message).digest();
    return this.hashing(hashing).digest('hex');
  },
  hashing(message, encode) {
    const sha256 = crypto.createHash('sha256');
    return sha256.update(message);
  }
}