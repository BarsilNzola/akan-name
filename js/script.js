function akanName() {
	var mM = document.getElementById(mm);
	var dD = document.getElementById(dd);
	var yYYY = document.getElementById(yyyy);
	var cC = yYYY.substring(0,2)
	var yY = yYYY.substring(1,3)

	function dayOftheWeek() {
		var firstBracket = (cC/4-2*cC-1)
		var secondBracket = (5*yY/4)
		var thirdBracket = (26*(mM+1))
		var calculation = (firstBracket+secondBracket+thirdBracket+dD) mod 7
		var dow = calculation
	}

	
	alert("Your date of birth is" + dob + "and gender is" + gender + "Your Akan Name is .....")
}