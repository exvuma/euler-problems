//var bigint = require('big-integer')
function bigint(num){
  return num
}
function factorial(N){
	results = bigint(1)
	for (var i = 0; i < N; i++) {
		results = results.multiply(i + 1)
	}
	return results
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
// bigint(2).pow(1000)["value"].map((x)=> getSumDigitsHackWay(x) ).reduce((x,y) => x+ y )
// console.log(factorial(100)["value"].map((x)=> getSumDigitsHackWay(x) ).reduce((x,y) => x+ y ))
console.log('V is amaze')