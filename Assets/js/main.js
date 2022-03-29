//navbar scroll Y to box shadow navbar

$(document).ready(function() {
    $(window).scroll(function() {
        if (window.scrollY > 100) {
            $("#header").addClass("navbar-shadow");
        } else {
            $("#header").removeClass("navbar-shadow");
        }
    });

});

//navbar scroll Y to box shadow navbar





//estate Info spiner js

var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        clickable: true
    },
    breakpoints: {

        800: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        // when window width is <= 640px     
        1400: {
            slidesPerView: 3,
            spaceBetween: 30
        }

    }
});
//estate Info spiner js