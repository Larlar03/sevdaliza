/*Slide down mobile menu*/
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchBox = document.getElementById("search-box");

menuIcon.addEventListener('click', function() {
    if(slideoutMenu.style.opacity === "0"){
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = 'none';
    } else {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = 'auto';
    }
})

