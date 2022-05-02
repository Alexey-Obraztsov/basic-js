const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  const reg = /^(?:(?:[0-9][A-F]|[A-F][0-9]|[0-9][0-9]|[A-F][A-F])\-){5}(?:[0-9][A-F]|[A-F][0-9]|[0-9][0-9]|[A-F][A-F])$/;
  return reg.test(n);
}

module.exports = {
  isMAC48Address
};
