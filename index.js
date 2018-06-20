const numeral = require('numeral')
const { Base64 } = require('js-base64')

module.exports = ({ type, token }) => {
  let dict
  if (token) {
    dict = JSON.parse(Base64.decode(token))
  } else {
    dict = {
      keyword: 0,
      text: 0,
      number: 0,
      date: 0,
    }
  }
  dict[type]++
  var path = `data.${type}${numeral(dict[type]).format('000')}`
  return { path, nextToken: Base64.encode(JSON.stringify(dict)) }
}
