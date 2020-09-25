"use strict";
// Contact showup
function contactShowup() {
    document.querySelector(".contact-showup").classList.toggle("mobile-toggle");
}
document.getElementById("contactShowup").addEventListener("click", function (event) {
    contactShowup();
});
document.getElementById("closeDialogContact").addEventListener("click", function (event) {
    contactShowup();
});
// Settings showup
function settingsShowup() {
    document.querySelector(".settings-showup").classList.toggle("mobile-toggle");
}
document.getElementById("openSettings").addEventListener("click", function (event) {
    settingsShowup();
});
document.getElementById("closeSettings").addEventListener("click", function (event) {
    settingsShowup();
});
document.getElementById("settingsBackground").addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.id == "settingsBackground") {
        settingsShowup();
    }
});

// Menu accordion
let accItem = document.getElementsByClassName('side-menu__element');
let accHD = document.getElementsByClassName('side-menu__heading');
let accArrows = document.getElementsByClassName('side-menu__arrow');
let i;
let k;
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'side-menu__element close';
    }
    for (i = 0; i < accArrows.length; i++) {
        accArrows[i].className = 'side-menu__arrow';
    }
    if (itemClass == 'side-menu__element close') {
        this.parentNode.className = 'side-menu__element open';
        this.querySelector('.side-menu__arrow').classList == 'side-menu__arrow'
        if (this.querySelector('.side-menu__arrow').classList == 'side-menu__arrow') {
            this.querySelector('.side-menu__arrow').classList.toggle("transform-arrow");
        }
    }
}
// Pick up selection
let rateElements = document.getElementsByClassName('rate-pick__element');
// Обработка клика на выбор тарифного плана
function pickRate() {
    let pickItem = this.className;
    for (i = 0; i < rateElements.length; i++) {
        if (rateElements[i].classList.contains('rate-pick__element_active')) {
            rateElements[i].classList.toggle('rate-pick__element_active');
        }
        let mas = rateElements[i].getElementsByClassName('rate-pick__description');
        for (k = 0; k < mas.length; k++) {
            if (mas[k].classList.contains('rate-pick__description_active')) {
                mas[k].classList.toggle('rate-pick__description_active');
            }
        }
    }
    this.classList.toggle("rate-pick__element_active");
    let mas = this.getElementsByClassName('rate-pick__description');
    for (i = 0; i < mas.length; i++) {
        mas[i].classList.toggle("rate-pick__description_active");
    }
}

for (i = 0; i < rateElements.length; i++) {
    rateElements[i].addEventListener('click', pickRate, false);
}

// Account Dropdown
accountSection.addEventListener("click", function (event) {
    document.getElementById('accountSectionDropdown').classList.toggle("dropdown-toggle");
});