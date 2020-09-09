"use strict";
// Header dropdown
function headerDropdown() {
    document.querySelector(".header-dropdown").classList.toggle("mobile-toggle");
}
// Login show
function accountSectionShow() {
    document.querySelector(".authorization-showup").classList.toggle("mobile-toggle");
}
// Registration show
function accountSectionRegistrationLink() {
    accountSectionShow();
    accountSectionRegistrationClose();
}
// Registration close
function accountSectionRegistrationClose() {
    document.querySelector(".registration-showup").classList.toggle("mobile-toggle");
}
// Buttons
window.addEventListener("click", function (event) {
    if (event.target.id === "account_button") {
        accountSectionShow();
    }
    if (event.target.id === "header_dropdown" || event.target.parentNode.id === "header_dropdown") {
        headerDropdown();
    }
    if (event.target.id === "close_dialog_authorization") {
        accountSectionShow();
    }
    if (event.target.id === "close_dialog_registration") {
        accountSectionRegistrationClose();
    }
    if (event.target.id === "link_registration") {
        accountSectionRegistrationLink();
    }
    if (event.target.id === "link_autorization") {
        accountSectionRegistrationLink();
    }
});
// Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow: 'splide__arrow your-class-arrow',
            prev: 'splide__arrow--prev your-class-prev',
            next: 'splide__arrow--next your-class-next',
        },
        rewind: true,
        perPage: 3,
        perMove: 1,
        pagination: false,
        breakpoints: {
            768: {
                focus: 2,
                perPage: 2,
                padding: {
                    right: '120px',
                },           
            },
            425: {
                perPage: 2,
                gap: "30px",
                focus    : 'center',
                padding: {
                    right: '50px',
                },  
            },
            340: {
                perPage: 2,
                gap: "50px",
                focus    : 'center',
                padding: {
                    left: '20px',
                    right: '40px',
                },  
            }
        }
    }).mount();
});