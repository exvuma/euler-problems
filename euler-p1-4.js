// 1, 1, 2, 3, 5, 8, 13, 21, ...
function fib(i) {
  // var x = 1
  // var sum = 0
  if (i <= 2)
    return 1
  return fib(i-1) + fib(i-2)
  }
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

// 5
// 5 / 1 
// 5 / 2 
// 5 / 3
// 5 / 4 
// 5 / 5 
// 
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
  
  while(var it = 1; it < n; it++){
    x
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

function solve() {
  const [a, b, c] = [1, 1, 1]
  const max = 1000
  for (let ia = a; ia < max; ia++) {
    for (let ib = b; ib < max; ib++) {
      for (let ic = c; ic < max; ic++) {
          if (isPythagoreanTriplet(ia, ib , ic) && is1000(ia, ib , ic))
            return [ia, ib , ic]

      }
    }
  }
}

foo.apply(null, ['a', 'b', 'c'])

