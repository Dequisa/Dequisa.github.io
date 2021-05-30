
console.log("good luck")
window.onscroll = function() {myFunction()};
var header = document.querySelector(".info");
var sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }











// function viewPoint() {

//     document.getElementById("#home").style.display = "block";
//     document.getElementById("#me").style.display = "none";
//     document.getElementById("#experience").style.display = "none";
//     document.getElementById("#project").style.display = "none";
//     document.getElementById("#container").style.display = "none";
//     document.getElementById("#contact").style.display = "none";

// }
