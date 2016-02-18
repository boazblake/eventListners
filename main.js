// GO!


 var navBox = document.querySelector(".answer-box")
 // console.log(navBox)

 // Append the following on to navPArentBox
// <input id="navButt" value="Show/Hide Nav" type="button" />

var navButton = document.createElement('button');
navButton.innerHTML =
 '<input id="navButt" value="Show/Hide Nav" type="button" />';

navBox.appendChild(navButton);
// console.log(navButton)






































// // BONUS 
// var input = document.querySelector("#add-guest-bonus input")
// var guestList = document.querySelector("#add-guest-bonus ul")

// var addGuest = function(e) {
// 	console.log(e.keyCode)
// 	if (e.keyCode === 13) {
// 		var newGuestItem = document.createElement('li')
// 		newGuestItem.innerHTML = e.target.value + "<button>X</button>"
// 		newGuestItem.classList.add('guest')
// 		newGuestItem.querySelector('button').addEventListener('click',function() {
// 			guestList.removeChild(newGuestItem)
// 		})
// 		guestList.appendChild(newGuestItem)
// 		e.target.value = ''
// 	}
// }
// input.addEventListener('keypress',addGuest)