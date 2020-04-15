const crypto = require('crypto') // pacote crypto, usado para gerar o ID

module.exports =  function genarateUnicqueId() {
  return crypto.randomBytes(12).toString('HEX')
}