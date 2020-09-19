"use strict";
let accItem = document.getElementsByClassName('side-menu__element');
let accHD = document.getElementsByClassName('side-menu__heading');
let accArrows = document.getElementsByClassName('side-menu__arrow');
let i;
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