//select popup box and popup overlay and button
var popupoverlay = document.querySelector(".popup-overlay")

var popupbox = document.querySelector(".popup-box")

var addbutton = document.getElementById("add-popButton")

addbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

var cancel = document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})


var addBook= document.getElementById("add-book")
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookAurthor = document.getElementById("book-Author-input")
var bookDescription = document.getElementById("book-description")


addBook.addEventListener("click",function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${booktitleinput.value}</h2>
  <h4> ${bookAurthor.value} </h4>
  <p>${bookDescription.value}</p>
  <button>Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

function deleteButton(event){
  event.target.parentElement.remove()
}