


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





							// TASK 2/////


var inputEl = document.querySelector('input.listMaker')


var itemsListUl = document.querySelector(".guest-list")


var addItem = function(keyEvent) {
  var targetEl = keyEvent.target
  console.log([targetEl.value])

  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value

      var newLi = document.createElement('li')
      newLi.className += ' guest'
      newLi.textContent = userInput

      itemsListUl.appendChild(newLi)
      inputEl.value = ''
  }
}

inputEl.addEventListener('keydown',addItem)

// console.log( [inputEl] )






                  ///////// TASK 3/////





var inputEl3 = document.querySelector('input.listMaker3')
console.log([inputEl3])
var itemsListUl3 = document.querySelector('ul.guest-list-bonus')

var _guestNum = 0

function addItem3(keyEvent3){
  
  var inputEl = keyEvent3.target

  if (keyEvent3.keyCode === 13) {
    var userInput3 = inputEl.value
    // console.log([inputEl.value])

    var newLi3 = document.createElement('li')

    _guestNum++
    newLi3.className += ' guest g-'+_guestNum
    // make an actual button node that you can add an event listener to

    // assign an event listener that will remove only the li which is the parent of the clicked button.
    newLi3.innerHTML = userInput3 + '<button>X</button>'
    // console.log([newLi3])

   

    itemsListUl3.appendChild(newLi3)
  // console.log([newLi3])
    document.querySelector('.g-'+_guestNum + ' button').addEventListener('click', function(){

      console.log(newLi3)
      newLi3.outerHTML = ''
    })

    inputEl.value = ''
  }
}




var deleteListItem = function() {
  var newLi3 = document.querySelector('li')
  var deletedLi = itemsListUl3.removeChild(newLi3);
}



inputEl3.addEventListener('keydown',addItem3)
