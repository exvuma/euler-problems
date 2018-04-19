// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

function giveDivisors(num){
	//returns an array of numbers that divide into num
	const results = []
	for(var i=1 ; i < num; i++){
		if(Number.isInteger(num/i)){
			results.push(i)
		}
	}
	return results 

}

function getSumDigits(n){
  var stringNum = n.toString()
  var sum = 0
  for(var i = 0; i < stringNum.length; i++){
    dig  =  parseFloat(stringNum[i])
    sum += dig
  }
  return sum
}


function isAmicable(num){
	divisors1 = giveDivisors(num).reduce( (acum, curr) => { return acum +  curr}, 0) 
	divisors2 = giveDivisors(divisors1).reduce( (acum, curr) => { return acum +  curr}, 0) 
	return(num === divisors2 && num != divisors1)
}
function main(){
	const results = []
	for(var i = 0; i < 10000; i++){
		if(isAmicable(i)){
			console.log(results)
			results.push(i)
		}
	}
	return results.reduce( (acum, curr) => {return acum + curr}, 0)
}