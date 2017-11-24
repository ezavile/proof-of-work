module.exports = function(hash, difficulty) {
  const regex = new RegExp('^0{' + difficulty + '}');
  return Boolean(hash.match(regex));
}