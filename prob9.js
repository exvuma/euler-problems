//1000 - sqrt(a^2 + b^2 ) = a + b
//(a+b) ^ 2 + a^2 + b ^2 = 1000^2

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
  // solves for c, give a and b using Pythagorean equation
  aa = Math.pow(a,2)
  bb = Math.pow(b,2)
  return Math.sqrt(aa + bb)
}
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
    //chose b > ia, since a and b have identical relation this reduces redundant iterations
    for (let ib = ia; ib < max; ib++) {
        ic = 1000 - ia -ib
        it += 1
        if (ic === functc(ia, ib))
          return [ia, ib , ic, it]
    }
  }
}
function avg(x,y){
  return (x + y)/ 2
}
function findb(a, min_b, max_b, it){
  //return undef if unsolveable , returns a solved value of b, if there
  // exisits some b between min_b and max_b
  //  2nd item returned is number of recursions i.e. returns [solved_b , it]
  it ++
  // a + b + sqrt(a^2 + b^2)
  var max_solve = a + max_b+Math.sqrt(Math.pow(max_b, 2) + Math.pow(a, 2))
  var min_solve = a + min_b+Math.sqrt(Math.pow(min_b, 2) + Math.pow(a, 2))

  //Check if solved
  if( max_solve === 1000)
    return [max_b, it]
  if( min_solve === 1000)
    return [min_b,it]
  //check if solveable
  if(min_solve > 1000)
    return [undefined, it]
  if(max_solve < 1000 )
      return [undefined, it]
  if(max_b === min_b)
      return [undefined, it]

   //compute middle number, and recursive through the range closest to the solution
    var trunc = avg(max_b, min_b)
    trunc = trunc - trunc % 1
  //  var med = (1000 - min_solve >  max_solve  - 1000 )? findb(a,  trunc, max_b, max_b, it) : findb(a,  min_b , trunc, max_b, it)
    if(1000 - min_solve >  max_solve  - 1000 ){
      if(trunc === min_b) // prevents us recursively calling with same args.
         return [undefined, it]
      return findb(a,  trunc, max_b, it)
    }
    else{
      if(trunc === max_b)
         return [undefined, it]
      return findb(a,  min_b , trunc, it)
    }
  }


function solve4(){
  var it = 0
  const [a, b] = [1, 1]
  const max = 1000
  var minb = 1
  var maxb = 1000
  var c
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
