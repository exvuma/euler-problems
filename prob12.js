function getNumDivisors(num){
  // gets the number of divisors in num
  var numDivisors = 1
  for(var i = 0; i < num/i; i ++){
    if (num % i == 0){
      numDivisors += 2;
    }
  }
  return numDivisors;
}

function main() {
var naturalNum =0
console.log("john da man")
for(var i =1; i < 1000000;i++){
   naturalNum += i
  if (getNumDivisors(naturalNum) >= 500){// sexy J
    console.log(naturalNum)
    break
  }

}
console.log('done')
}
// main()
