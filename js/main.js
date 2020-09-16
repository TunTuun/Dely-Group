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
// Ask Question show
function askQuestionSectionShow() {
    document.querySelector(".ask-question-section").classList.toggle("mobile-toggle");
}
// Review show
function reviewSectionShow() {
    document.querySelector(".review-modal").classList.toggle("mobile-toggle");
}
// Buttons
window.addEventListener("click", function (event) {
    if (event.target.id === "account_button") {
        accountSectionShow();
    }
    if (event.target.id === "askQuestion") {
        askQuestionSectionShow();
    }
    if (event.target.id === "sendReview") {
        reviewSectionShow();
    }
    if (event.target.id === "closeDialogSendReview") {
        reviewSectionShow();
    }
    if (event.target.id === "closeDialogAskQuestion") {
        askQuestionSectionShow();
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
    new Splide( '#rateSlider' , {
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

// Review slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#reviewSlider', {
        focus: 'center',
        type: 'loop',
        perPage: 1,
        perMove: 1,
        arrows: false,
        autoplay: true,
    }).mount();
});

// Accordion
let accItem = document.getElementsByClassName('accordition-item');
let accHD = document.getElementsByClassName('accordition-item__heading');
let accArrows = document.getElementsByClassName('accordition-item__arrow');
let i;
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordition-item close';
    }
    for (i = 0; i < accArrows.length; i++) {
        accArrows[i].className = 'accordition-item__arrow';
    }
    if (itemClass == 'accordition-item close') {
        this.parentNode.className = 'accordition-item open';
        this.previousElementSibling.classList == 'accordition-item__arrow '
        if (this.previousElementSibling.classList == 'accordition-item__arrow') {
            this.previousElementSibling.classList.toggle("transform-arrow");
        }
    }
}