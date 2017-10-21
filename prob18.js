var unSeen = [0]
var seen = {}
var knownPaths = {}
var maxNode = {}

function nowPaths(n){
  //
}
function nextOpts(rowname, arr){
  //takes in a 2Xn triangle and gives an array of object with those routes along with weights
  // e.g. [AC : 10, BC : 12]
  row1 = arr[0]
  row2 = arr[1]
  results = []
  results2 = []
  var len = row2.length
  // for(var i = 0 ; i < len ; i++){
  //   row2 = arr[1]
  //   var ob = {}
  for(var k=0; k< len-1;k++){
    //iterate over first row
    // pathName = rowname.concat(k.toString())
    // ob[pathName] = arr[0][0] + arr[1][i]
    options = {}
    // options[rowname.concat((k).toString())] = arr[0][k] + arr[1][k]
    // options[rowname.concat((k+1).toString())] = arr[0][k] + arr[1][k+1]
    next1name = "c" + k.toString().concat( "r" + (rowname + 1))
    options[next1name] = arr[0][k] + arr[1][k]
    next2name = "c" + ( k +1).toString().concat( "r" + (rowname + 1)) 
    options[next2name] = arr[0][k] + arr[1][k+1]
    results2.push(options)
  }
  //   pathName = rowname.concat(i.toString())
  //   ob[pathName] = arr[0][0] + arr[1][i]
  //   results.push(ob)
  // }
  return results2
  // return{ "A": arr[0] + arr[0][1], "B": arr[0] + arr[0][1]}
}
function nextBest(origName, arr){
  //takes in a 2Xn triangle and gives an array of objects with those routes along with weights
  // e.g. [AC : 10, BC : 12]
  var opts = nextOpts(origName, arr)

  // return{ "A": arr[0] + arr[0][1], "B": arr[0] + arr[0][1]}
}
function decideNexts(opts){
  // inputs an array with wights e.g. [routeA : 10, routeB : 12],
  // and decides which paths to rule out by returning an array of feasible paths

}
function nextOpts2(origName, arr){
  //takes in a 2Xn triangle and gives an array of objects with those routes along with weights
  // e.g. [AC : 10, BC : 12]
  // row1 = arr[0]
  // row2 = arr[1]
  sum_arr = {}
  results = []
  size = 0
  prevPathName = ""
  remainingNumRows = arr.length -1
  for(var row = 0 ; row < arr.length  - 1; row++){// iterate rows
    for(var col = 0 ; col < arr[row].length; col++){ // iterate columns in a row
      var obj = {}
      // size += arr[row][i] + arr[row+1][col]
      // ob[origName] = size
      // results.push(ob)
      // if(!knownPaths[prevPathName]){
      //   pathName = i.toString().concat(row.toString())
      // }
      // pathName = i.toString().concat(row.toString().concat("-".concat(prevPathName)))

      spotName =  "c" + col.toString().concat( "r" + (row + 1).toString())
      //pathHistory = pathHistory.append(i.toString().concat(row.toString()))

      var opts = nextOpts(row, arr.slice(row +1, row + 3))
      path2Name =  bestHistory[spotName]//"c" + i.toString().concat( "r" + row.toString().concat("-".concat(knownPaths["c" + i.toString() + "r" + (row])))
      if (!opts[1] || !opts[1][spotName] || opts[0][spotName] > opts[1][spotName]){
         prevSpot = "c" + col + "r" + (row)
         bestHistory[spotName] = {"path" : prevSpot + bestHistory[prevSpot]["path"], "value": opts[0][spotName]}
      }else{
        prevSpot = "c" + (col + 1) + "r" + (row)
        bestHistory[spotName] = {"path" : prevSpot + bestHistory[prevSpot]["path"], "value": opts[1][spotName]}
      }
      // sum_arr[row] = opts
      // // record this path
      // if(!knownPaths[pathName] || knownPaths[pathName] < size){
      //   knownPaths[pathName] = size
      //   // break
      // }
      // prevPathName = pathName
      // remainingNumRows --;
    }
      prevSpot = spotName
  }
  console.log(results)
  return results
  // return{ "A": arr[0] + arr[0][1], "B": arr[0] + arr[0][1]}
}

var nextOptsArr = {}//{ "AC" : 10 , "BC": 12}
var knownPaths = {} //{ "AC" : 10 , "BC": 12}
var bestHistory = {"c0r1" : {"path" : "c0r0", "value": 170}, "c1r1" : {"path" : "c0r0", "value": 139}}//, "c0r2" : {"path" : "c0r0-c1r1-c0r2", "value": 170}, "11" : {"path" : "00", "value": 139}}
var final = [
[75 ],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 04, 82, 47, 65],
[19, 01, 23, 75, 03, 34],
[88, 02, 77, 73, 07, 63, 67],
[99, 65, 04, 28, 06, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]]
var test = [
[1 ],
[2, 1],
[2, 1, 0],
[18, 35, 87, 10],
[20, 04, 82, 47, 65],
[19]]
var bestHistory = { 'c0r0' : { "path":"", "value": final.slice(0,1)[0][0]}, "c0r1" : {"path" : "c0r0", "value": 170}, "c1r1" : {"path" : "c0r0", "value": 139}}// {"c0r1" : {"path" : "c0r0", "value": 170}, "c1r1" : {"path" : "c0r0", "value": 139}, "c0r2" : {"path" : "c0r0-c1r1-c0r2", "value": 170}, "11" : {"path" : "00", "value": 139}}
nextOpts2("A", final)
