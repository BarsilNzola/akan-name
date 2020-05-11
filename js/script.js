function akanName() {
	var mM = document.getElementById(mm);
	var dD = document.getElementById(dd);
	var yYYY = document.getElementById(yyyy);
	var gender = document.getElementById(gender)
	var cC = yYYY.substring(0,2)
	var yY = yYYY.substring(1,3)

	function dayOftheWeek() {
		var firstBracket = (cC/4-2*cC-1)
		var secondBracket = (5*yY/4)
		var thirdBracket = (26*(mM+1))
		var calculation = (firstBracket+secondBracket+thirdBracket+dD) mod 7
		var dow = calculation
	}

	function akanname() {
		switch (dayOftheWeek) {
			case 0:
			if (gender = male) {
				akanname = "Kwasi"
			} else {
				akanname = "Akosua"
			}

			case 1:
			if (gender = male) {
				akanname = "Kwadwo"
			} else {
				akanname = "Adwoa"
			}

			case 2:
			if (gender = male) {
				akanname = "Kwabena"
			} else {
				akanname = "Abenaa"
			}

			case 3:
			if (gender = male) {
				akanname = "Kwaku"
			} else {
				akanname = "Akua"
			}

			case 4:
			if (gender = male) {
				akanname = "Yaw"
			} else {
				akanname = "Yaa"
			}

			case 5:
			if (gender = male) {
				akanname = "Kofi"
			} else {
				akanname = "Afua"
			}

			case 6:
			if (gender = male) {
				akanname = "Kwame"
			} else {
				akanname = "Ama"
			}
		}	
	}


	alert("Your date of birth is" + dob + "and gender is" + gender + "Your Akan Name is .....")
}