var knownCollatz ={} //an array that will hold values of knownCollatz Sequences
                    // e.g. [ "13": [13, 40, 20..]]

function compEven(n){
  return n/2
}
function compOdd(n){
  return 3 * n + 1
}
function getCollatzSeq(n){
  var result = [n]
  var next = n
  if(n == 1 || n == 0 ){
    return [n]
  }
  // if(knownCollatz[n]){
  //   return knownCollatz[n]
  // }
  if (next % 2 == 0){
    // next = result.push(compEven(next))
    // knownCollatz[n] = result.concat(getCollatzSeq(compEven(n)))
    // return   knownCollatz[n]
     return result.concat(getCollatzSeq(compEven(n)))
  }else{
    // knownCollatz[n] = result.concat(getCollatzSeq(compOdd(n)))
    // return   knownCollatz[n]
     return result.concat(getCollatzSeq(compOdd(n)))
  }
}
function getLongestCollatz(n){
  var longest = 0;
  var longestseq = []
  var result = 0
  for(var i = n ; i > 0; i--){
    seq = getCollatzSeq(i)
    if(longest < seq.length){
      longest = seq.length
      longestseq = seq
      result = i
    }
  }
  // console.log(longestseq)
  console.log(result)
  return longestseq
}
// 2 ^ x = 16
// x = log_2(16) = log16/log2
