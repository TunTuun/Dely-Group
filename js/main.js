"use strict";
// Header dropdown
function headerdropdown() {
    document.querySelector(".header-dropdown").classList.toggle("mobile-toggle");
}
// Login show
function account_section_show() {
    document.querySelector(".authorization-showup").classList.toggle("mobile-toggle");
}
header_dropdown.onclick = headerdropdown;
header_dropdown_close_button.onclick = headerdropdown;
account_button.onclick = account_section_show;