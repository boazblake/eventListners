
						// NAVIGATION BUTTON//
var navBox = document.querySelector(".answer-box")

var navButton = document.createElement('button');
navButton.innerHTML =
 '<input id="navButt" value="Show/Hide Nav" type="button" />';

navBox.appendChild(navButton);


						// NAVIGATION OPACITY//


var navState = {
	buttonShow: true
	navValue: true
}

var toggleNavValue = function() {
  if (navState.buttonShow) {
    navButton.value = "hi"
    navState.showing = false
  }
  else {
    bmo.style.opacity = 1
    navState.showing = true
  }
}



























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