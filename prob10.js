// cache the numbers we already no are not prime
// to reduce to O(log * n)
var notprime = {}
module.exports.isPrime = function(num){
  var v = false
  if (notprime[num])
    return false
  for(i = 2; i < num; i++){
      // if not divisable by any lower number, return true
      if((num / i) % 1 == 0 ){
        notprime[num] = true
        notprime[i*num] = true
        return false
      }
      // if we have gone so far that we checked anything that i could be multipled by
      // in order to == num, then no point in continueing to check, this num must be
      // prime
      if (i  >  num / i ){ // 3 > (13/3)
        return true
      }
    }
    return true
}

module.exports.getSumPrime = function(large){
   var sum = 0
   for(var i = 2; i < large; i++){
     if(notprime[i])
        continue
     if(module.exports.isPrime(i))
       sum += i
   }
   return sum
}
