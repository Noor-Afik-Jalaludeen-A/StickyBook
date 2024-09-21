var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    
});

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

var container=document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription =document.getElementById("book-description-input")

addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button class="del-notes">Delete</button>`
    container.append(div)

    div.querySelector(".del-notes").addEventListener("click",function(event){
    event.target.parentElement.remove()
})

    popupbox.style.display="none"
    popupoverlay.style.display="none"
    booktitle.value=""
    bookauthor.value=""
    bookdescription.value=""

    
})

document.querySelectorAll(".del-notes").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
  });
