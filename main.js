


						// NAVIGATION BUTTON//
var navBox = document.querySelector(".answer-box")

var navButton = document.createElement('button');
navButton.innerHTML =
 '<input id="navButt" value="Show/Hide Nav" type="button" />';

navBox.appendChild(navButton);


						// NAVIGATION OPACITY//
var navMenu = document.querySelector('.nav-menu')

var navState = {
	navShow: true
}

var navBarHide = function() {
  if (navState.navShow) {
    navMenu.style.opacity = 0
    navState.navShow = false
  }
  else {
    navMenu.style.opacity = 1
    navState.navShow = true
  }
}

navButton.addEventListener("click", navBarHide)






























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