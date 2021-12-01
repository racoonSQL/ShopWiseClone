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

// Modal timeout

// $(document).ready(function(){           
//     $('#modal').modal('show');
//       setTimeout(function() {$('#modal').modal('hide');}, 
//             1000);
// }); 

function onPopupOpen() {
$("#modal").show();
// $("#yurEmail").focus();
}

function onPopupClose() {
    $("#modal").hide();
    // lastFocus.focus();
}

// function displayPopup() {
//     $.colorbox({
//       inline: true,
//       href: "#modal",
//       className: "cta",
//       width: 850,
//       height: 450,
//       onComplete: onPopupOpen,
//       onClosed: onPopupClose
//     });
//   }
// var lastFocus;

setTimeout(function() {
    // lastFocus = document.activeElement;
    onPopupOpen();
}, 1500);

$(".content__body-btn").click(function() {
    onPopupClose();
});



// Modal Window Product
(() => {
    const modalBtns = Array.from(document.querySelectorAll(".otherPages"));
    modalBtns.forEach(btn => {
      btn.onclick = function(e) {
        e.preventDefault();
        const modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
        document.querySelector("body").style.overflow = 'hidden';
      }
    });
    
    const closeBtns = Array.from(document.querySelectorAll(".content__quick-close"));
    closeBtns.forEach(btn => {
      btn.onclick = function() {
        let modal = btn.closest('.modalProduct');
        modal.style.display = "none";
        document.querySelector("body").style.overflow = 'visible';
        var $n = $(this)
        .parent(".content__quick")
        .find(".quantity__num-qty");
        $n.val(1);
      }
    });
    
    window.onclick = function(event) {
        if (event.target.className === "modalProduct") {
            event.target.style.display = "none";
        }
    }
})();



// Increase input value
// function increaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
  
// function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
// }


var buttonPlus  = $(".quantity__num-plus");
var buttonMinus = $(".quantity__num-minus");

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".quantity__num")
  .find(".quantity__num-qty");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".quantity__num")
  .find(".quantity__num-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
});
