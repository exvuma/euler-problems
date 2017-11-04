// one, two, three, four, five, six, seven, eight, nine, ten
// one, two, three, four, five, six, seven, eight, nine, ten
function series(n) {
  let result = []
  for (let i = 1; i < n; i++) {
    result.push(i)
  }
  return result
}
var converter = require('number-to-words');
// converter.toWords(13);
module.exports.numToWords = function(n) {
  return series(n).map(function(x){
    return converter.toWords(x)
  })
}

function mapper(a, b) {
  return a + (b || 0)
}
// console.log(numArr.map(converter.toWords))
numUtils.numToWords(1001).map(x => x.replace(/\-|\s/g, '').replace(/hundred(.)/g, 'hundredand$1')).join('').length
