function twoPowerSeries(n) {
  let result = []
  for (let i = 1; i < n; i++) {
    powerTwo = Math.pow(2,i)
    result.push(powerTwo)
  }
  return result
}
function tenSeries(n) {
  let result = []
  for (let i = 1; i < n; i++) {
    result.push(Math.pow(10,i))
  }
  return result
}
function series(n) {
  let result = []
  for (let i = 1; i < n; i++) {
    result.push(i)
  }
  return result
}
function x_0(n){
  if(n == 1)
    return 2
  // return the 0th element of 2^n in decimal
switch (n % (4))    {
  case 0:
    return 6
    break;
  case 1:
    return 2
    break;
  case 2:
    return 4
    break;
  case 3:
    return 8
    break;
  }
}
function x_1(n){
  // return the 1th element of 2^n in decimal
  return Math.floor(n / 10)
}
function getSumDigitsMathWay(n){
  sum = 0
  remainder = n
  for(var i = 0; n >= (Math.pow(10, i)); i++){
    // console.log(  " Math.pow(10,i)" + Math.pow(10,i))
    // console.log("Math.floor(n / Math.pow(10,i))" + Math.floor(n / Math.pow(10,i)))
    sum += remainder % Math.pow(10,i)
    remainder = (remainder - (remainder % Math.pow(10,i)))
    console.log("remainder" + remainder)
    console.log("sum" + sum)
  }
  return sum
}
function getSumDigitsHackWay(n){
  var stringNum = n.toString()
  var sum = 0
  for(var i = 0; i < stringNum.length; i++){
    dig  =  parseFloat(stringNum[i])
    sum += dig
  }
  return sum
}
function getSumDigitsMathWay(n){
  sum = 0
  remainder = n
  for(var i = 0; n >= (Math.pow(10, i)); i++){
    // console.log(  " Math.pow(10,i)" + Math.pow(10,i))
    // console.log("Math.floor(n / Math.pow(10,i))" + Math.floor(n / Math.pow(10,i)))
    sum += remainder % Math.pow(10,i)
    remainder = (remainder - (remainder % Math.pow(10,i)))
    console.log("remainder" + remainder)
    console.log("sum" + sum)
  }
  return sum
}
function getNthdig(num, n){
  //returns nth postion of decimal digit
  m = num.toString().length - n - 1
  // console.log("m =" + m )
  // console.log(num.toString()[m])
  return parseFloat(num.toString()[m])

}
arr  = series(10)
arrPower = twoPowerSeries(100)
sumDigArr = arrPower.map(getSumDigitsHackWay)
arrPower.map(x => [x, getNthdig(x, 1)]) // maps 1, to what the 1th digit would be so we can spot a pattern
sumDigArr.map(x => { return [x,  getNthdig(x,0)]})
arrTens = tenSeries(20)
binaryPower10 = arrTens.map(dec2Bin).map(toString)
//check that Javascript isn't overflowering
arrTens.map(dec2Bin).map(x => parseInt(x, 2))

/// Using bigInt library in Node JS
var bigint = require('big-integer')
bigint(2).pow(1000)["value"].map((x)=> getSumDigitsHackWay(x) ).reduce((x,y) => x+ y )
