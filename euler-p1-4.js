// 1, 1, 2, 3, 5, 8, 13, 21, ...
function fib(i) {
  // var x = 1
  // var sum = 0
  if (i <= 2)
    return 1
  return fib(i-1) + fib(i-2)
  }

// 1, 1, 2, 3
//

function  bigPrimeFactor(n){
    var p
    for (var it = 1; it < (n / 2); it++){
        if (n % it === 0){
          if(isPrime(it))
            p = it
        }
    }
    return p
}


// 6
// it: 2; 2 < (6 / 2) -> 6%2 == 0

// 7
// it: 2; 2 < (7 / 2) -> 7%2 != 0
// it: 3; 3 < (7 / 3) -> 7%3 != 0
// it: 4; 4 < (7 / 4) -> bail
function isPrime(n){
  if (n === 1) return true
  for (var it = 2; it < (n / it); it++){
        if (n % it === 0){
          return false
        }
    }
    return true
}
function prob(n){
  return bigPrimeFactor(n)
}

function giveMirrors(n){
  var arr = []
  if (n ===1)
    return series(10)

  for(let it = 1; it < n; it++){
    arr.push(x)
  }
}
function loop(n){
  var arr = +'9'.repeat(n)
  var i = 0;
  var curr
  var greatest = 0
  for (var x = arr; x > 0; x--) {
    for (var y = arr; y >= x; y--) {
      curr = x * y
      if (isMirror(curr) && curr > greatest) {
        greatest = curr
      }
    }
  }
  return greatest
}

function isMirror(x){
  x = x.toString()
  var n = x.length
  for (var i = 0; i < n; i++){
    x1 = x[n - 1 - i]
    x2 = x[i]
    if (x1 !== x2){
      return false
    }
  }
  return true
}

function series(n) {
  return Array.apply(null, Array(n)).map((x, i) => i)
}

function foo(a, b, c) {
  console.log(this, a, b, c)
}

function isPythagoreanTriplet(a, b, c) {
  if (a > b) return false
  if (a > c) return false
  if (b > c) return false

  return (Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2)
}
function is1000(){
  const args = Array.prototype.slice.call(arguments)
  return args.reduce((sum, x) => sum + x, 0) === 1000
}

function solve() { // O(n^3)
  // const [a, b, c] = [1, 1, 1]
  var it = 0
  const [a, b, c] =   [1, 1, 1]
  const max = 1000
  var i = 0
  for (let ia = a; ia < max; ia++) {
    for (let ib = b; ib < max; ib++) {
      for (let ic = c; ic < max; ic++) {
        it += 1
          if (isPythagoreanTriplet(ia, ib , ic) && is1000(ia, ib , ic))
            return [ia, ib , ic, it]
      }
    }
  }
}
function functc(a, b){
  aa = Math.pow(a,2)
  bb = Math.pow(b,2)
  return Math.sqrt(aa + bb)
}
//1000 - sqrt(a^2 + b^2 ) = a + b
//(a+b) ^ 2 + a^2 + b ^2 = 1000^2

function solve2()
{ //O(n^2)
  var it = 0
  const [a, b] = [1, 1]
  const max = 1000
  var ic
  for (let ib = b; ib < max; ib++) { // makes assumption that a, b, c are integers
    for (let ia = b; ia < max; ia++) {
        ic = 1000 -ia -ib
        // c = functc( ia , ib )
        it += 1
        if (ic === functc(ia, ib))
          return [ia, ib , ic, it]
    }
  }
}
function solve3()
{ //O(n^2)
  var it = 0
  const [a, b] = [1, 1]
  const max = 1000
  var ic
  for (let ia = a; ia < max; ia++) {
    //chose b > sqrt()
    for (let ib = ia; ib < max; ib++) {
        ic = 1000 - ia -ib
        // c = functc( ia , ib )
        it += 1
        // console.log(it)
        if (ic === functc(ia, ib))
          return [ia, ib , ic, it]
    }
  }
}
function avg(x,y){
  return (x + y)/ 2
}
function min_max(){
  return min, max
}
function findb(a, min_b, max_b, it){
  //return undef is unsolveable , returns a solved value of b, if there
  //exisits some b between min_b and max_b
  // second arg returned is number of recursions
  it ++
  // a + b + sqrt(a^2 + b^2) === 10000
  var max_solve = a + max_b+Math.sqrt(Math.pow(max_b, 2) + Math.pow(a, 2))
  var min_solve = a + min_b+Math.sqrt(Math.pow(min_b, 2) + Math.pow(a, 2))

  //Check if solved
  if( max_solve === 1000)
    return [max_b, it]
  if( min_solve === 1000)
    return [min_b,it]
  //check if solveable
  if(min_solve > 1000 )
    return [undefined, it]
  if(max_solve < 1000 ){
      //both min and max b are too small, then we must use the last max value for b
      return [undefined, it]
      // return findb(a, max_b, last_max  , it)
    }
    if(max_b === min_b)
        return [undefined, it]

    var trunc = avg(max_b, min_b)
    trunc = trunc - trunc % 1
  //  var med = (1000 - min_solve >  max_solve  - 1000 )? findb(a,  trunc, max_b, max_b, it) : findb(a,  min_b , trunc, max_b, it)
    if(1000 - min_solve >  max_solve  - 1000 ){
      if(trunc === min_b)
         return [undefined, it]
      return findb(a,  trunc, max_b, it)
    }
    else{
      if(trunc === max_b)
         return [undefined, it]
      return findb(a,  min_b , trunc, it)
    }
  }



//   for (let ia = a; ia < max; ia++) {
//     /// b=  1, b = 1000; b = 500, b = 1 ;
//     ia = 1000 - c - b
//     if(isPythagoreanTriplet(ia, ib, ic ))
//       return [ia, ib, ic]
//     var min, max = mai_max()
//   solve4(ia, ib, ic)
//
//   //take average
// }
function solve4(){
  var it = 0
  const [a, b] = [1, 1]
  const max = 1000
  var minb = 1
  var maxb = 1000
  var ic
  for (let ia = a; ia < max; ia++) {
    var testb
    [testb, it] = findb(ia, minb, maxb, it)
    it ++
    if (testb === undefined)
      continue
    else{
      c = Math.sqrt(Math.pow(ia, 2)+ Math.pow(testb, 2))
      return {a: ia, b: testb,c: c, it: it}
    }
  }
}
// foo.apply(null, ['a', 'b', 'c'])
