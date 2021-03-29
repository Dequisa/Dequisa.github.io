// It looks like the code below was used to change inline styles when a DOM element is clicked.
// This approach can totally work. I think it's more common to toggle whether a CSS class
// is applied to an element. That way, you can keep all of your css code inside your css files!

// document.addEventListener("DOMContentLoaded", () => {
//     let circle = document.querySelector(".dot1")
//     circle.addEventListener("click", () =>{
//         if(circle.style.zoom === "80%"){
//             circle.style.zoom="50%"
//        }else{ circle.style.zoom="80%"
//         circle.style.boarder = "2px"}
//     })
// })


// I love that you started to incporporate an API into your project!
// based on the commented out code, it looks like you had a good start here.

// let mylocation = ""

// fetch('https://restcountries.eu/rest/v2/name/united')
// .then(response => response.json())
// .then(data => {
//    mylocation = data[4].name
//     console.log('Got some data:', mylocation)
//     p.innerText = `My location is: ${mylocation}`
//     parent.appendChild(p)})
// .catch(error => console.log('oh no:', error.message))

// const parent = document.querySelector(".info")
// let p = document.createElement("p")



// Is there a way you could toggle all these dark-mode settings
// without having to grab each DOM element individually?
// Option 1: use querySelectorAll
// Option 2: design your css so that applying .dark-mode to a high-up DOM node
// will control the theme of the entire page.

// function off(){
//     var power1 = document.querySelector(".main");
//     var power2 = document.querySelector("#project");
//     var power3 = document.querySelector(".container");
//     var power4 = document.querySelector("#contact");
//     power1.classList.toggle("dark-mode");
//     power2.classList.toggle("dark-mode");
//     power3.classList.toggle("dark-mode");
//     power4.classList.toggle("dark-mode");
// }
// let button = domcument.querySelector("#on")
// button.addEventListener("click",()=>{
//     var header = document.querySelector(".head");
//     if(!header.classList.toggle("dark-mode")){
//     header.classList.toggle("dark-mode")
//     } else {header.classList.toggle("dark-mode")}
// })




// function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }


function viewPoint() {

    document.getElementById("#home").style.display = "block";
    document.getElementById("#me").style.display = "none";
    document.getElementById("#experience").style.display = "none";
    document.getElementById("#project").style.display = "none";
    document.getElementById("#container").style.display = "none";
    document.getElementById("#contact").style.display = "none";

}

// Is there a way you could refactor the code below so that it doesn't
// rely on the global visibleDivId variable? One way I can think to do it
// is remove the divVisibility function, and have hideNonVisibleDivs accept the divId variable

// var divs = ["home","me","experience","container","contact"];
// var visibleDivId = null;
// function divVisibility(divId) {
//   if(visibleDivId === divId) {
//     visibleDivId = null;
//   } else {
//     visibleDivId = divId;
//   }
//   hideNonVisibleDivs();
// }
// function hideNonVisibleDivs() {
//   var i, divId, div;
//   for(i = 0; i < divs.length; i++) {
//     divId = divs[i];
//     div = document.getElementById(divId);
//     if(visibleDivId === divId) {
//       div.style.display = "block";
//     } else {
//       div.style.display = "none";
//     }
//   }
// }
