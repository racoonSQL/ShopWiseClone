// navbar scroll
var nav = document.getElementById("nav");

window.onscroll = function() {
    if (window.pageYOffset > 130) {
        nav.classList.add("navScroll");
    } else {
        nav.classList.remove("navScroll");
    }
}


// scroll to top btn
var scrollUp = document.querySelector("#scroll");

scrollUp.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop < 200) {
        scrollUp.style.display = "none";
    } else {
        scrollUp.style.display = "block";
    }
});


// menu search overlay
var searchOverlay = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
var close = document.getElementById("close");

searchBtn.addEventListener("click", function(event) {
    searchOverlay.classList.remove("searchHide");
    searchOverlay.classList.add("searchShow");
    event.preventDefault();
});

close.addEventListener("click", function() {
    searchOverlay.classList.add("searchHide");
    searchOverlay.classList.remove("searchShow");
});

// menu dropdown mobile
var dropdownMenu = document.querySelector(".header .header__bottom .header__bottom-row .row__right .mobile");
var dropdownBtn = document.querySelector(".header .header__bottom .header__bottom-row .row__right .row__right-btn");

dropdownBtn.addEventListener("click", function() {
    dropdownMenu.classList.toggle("show");
});

// menu child
var item = document.querySelectorAll('.mobile__dropdown-item');

item.forEach(element => {
    element.addEventListener('click',function(event){
        event.preventDefault();
        this.nextSibling.nextSibling.classList.toggle("activE");
    });
});

// Blog menu child
var iteM = document.querySelectorAll('#BLOG .list__child');

iteM.forEach(element => {
    element.addEventListener('click',function(event){
        event.preventDefault();
        this.nextSibling.nextSibling.classList.toggle("activE");
    });
});