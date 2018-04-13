months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct" , "Nov", "Dec"]
function isLeapYear(year){
	if (year % 4 === 0)
		return true
	if( year === 2000)
		return true 
	return false
}
function numDaysinMonth(month, year){
	if(month == "Sept" || month == "April"|| month == "June"|| month == "Nov"){
		return 30
	}else if(month == "Feb"){
		if (!isLeapYear(year)) 
			return 28
		return 29
	}else
		return 31
}

function lastDayofMonth(month,  start, year){
// start = sunday than a 0, monday a 1
	numDays = numDaysinMonth(month, year)
	day =  ( start + numDays  ) % 7
	return day
}

function main(){
	lastMonthsLastDay = 0
	thisMonthsFirstDay = 1
	count = 0
	for (var year = 1901; year < 2001; ++year) {
		for (var i = 0; i < months.length;  i++) {
			thisMonthsFirstDay = (lastMonthsLastDay + 1) % 7
			month = months[i]
			if (thisMonthsFirstDay === 0) count ++
			lastMonthsLastDay = lastDayofMonth(month, lastMonthsLastDay, year) - 1
		}
	}
	return count

	}

//monday jan 1 1901
//30 setp, april, june, nov
// feb 28 or 29 leap
// any year easily divisible by 4 except on centuries unless divisible by 400