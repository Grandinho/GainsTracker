

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {};

function MakeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
         navbar.classList.remove("sticky")  
    }
}