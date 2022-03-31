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

//Estate Info FAQ TAB BAR START

$(".faq-tabs .tab-item").each(function(index, element) {
    // element == this
    $(element).click(function(e) {
        e.preventDefault();
        //$(".tab-content").removeClass("active");

        if (!$(this).hasClass("bg-shadow")) {
            $(".tab-content").removeClass("active");
            $(".tab-title").removeClass("active-head");
            $(".tab-title h4").removeClass("active");
            $(".tab-title .arrow").removeClass("active-arrow");
            $(".tab-item").removeClass("bg-shadow");
        }
        $(this).find(".tab-content").toggleClass("active");
        $(this).find(".tab-title").toggleClass("active-head");
        $(this).find(".tab-title h4").toggleClass("active");
        $(this).find(".tab-title .arrow").toggleClass("active-arrow");
        $(this).toggleClass("bg-shadow");


    });
});

//Estate Info FAQ TAB BAR END