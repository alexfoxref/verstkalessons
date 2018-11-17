'use strict'

let sidebarScrollButton = document.querySelectorAll(".button_icon_scroll");
let sidebarImage = document.querySelectorAll(".sidebar-banner__background");

for (let i = 0; i < sidebarScrollButton.length; i++) {
    function changeScrollColor() {
        sidebarScrollButton[i].classList.add("button_icon_scroll-active");
        sidebarImage[i].classList.add("sidebar-banner__background-active");
        for (let j = 0; j < sidebarScrollButton.length; j++) {
            if (j != i) {
                sidebarScrollButton[j].classList.remove("button_icon_scroll-active");
                sidebarImage[j].classList.remove("sidebar-banner__background-active");
            }
        }
    }   
    sidebarScrollButton[i].addEventListener("click", changeScrollColor);
}