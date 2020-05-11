function nameAkan() {
	var mM = document.getElementById('mm');
	var dD = document.getElementById('dd');
	var yYYY = document.getElementById('yyyy');
	var gender = document.getElementById('gender');
	var cC = yYYY.substring(0,2)
	var yY = yYYY.substring(1,3)

	function dayOftheWeek() {
		var firstBracket = (cC/4-2*cC-1)
		var secondBracket = (5*yY/4)
		var thirdBracket = (26*(mM+1))
		var calculation = (firstBracket+secondBracket+thirdBracket+dD) % 7
		var dow = calculation
	}

	function akanname() {
		if (dow = 0 && gender === male) {
			akanname = "Kwasi"
		} else if (dow = 1 && gender === male) {
			akanname = "Kwadwo"
		} else if (dow = 2 && gender === male) {
			akanname = "Kwabena"
		} else if (dow = 3 && gender === male) {
			akanname = "Kwaku"
		} else if (dow = 4 && gender === male) {
			akanname = "Yaw"
		} else if (dow = 5 && gender === male) {
			akanname = "Kofi"
		} else if (dow = 6 && gender === male) {
			akanname = "Kwame"	
		} else if (dow = 0 && gender === female) {
			akanname = "Akosua"
		} else if (dow = 1 && gender === female) {
			akanname = "Adwoa"
		} else if (dow = 2 && gender === female) {
			akanname = "Abenaa"
		} else if (dow = 3 && gender === female) {
			akanname = "Akua"
		} else if (dow = 4 && gender === female) {
			akanname = "Yaa"
		} else if (dow = 5 && gender === female) {
			akanname = "Afua"
		} else if (dow = 6 && gender === female) {
			akanname = "Ama"
		}
	}
	alert("Your Akan Name is" + akanname)
}