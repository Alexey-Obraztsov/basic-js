const { NotImplementedError } = require('../extensions/index.js');


function getEmailDomain(email) {
  let domain = email.split('@').pop();
  return domain;
}

module.exports = {
  getEmailDomain
};
